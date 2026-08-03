import { notFound } from "next/navigation";

import { TinaMarkdown } from "tinacms/dist/rich-text";

import client from "@/lib/tina-client";

import PageClient from "./client-page";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const pagesResponse = await client.queries.pageConnection();
  const pages = pagesResponse.data.pageConnection.edges || [];

  return pages
    .map((page) => {
      const filename = page?.node?._sys?.filename;
      // Skip the home page as it's handled by app/page.tsx
      if (filename === "home") return null;
      return {
        slug: filename,
      };
    })
    .filter(Boolean);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  try {
    const pageResponse = await client.queries.page({
      relativePath: `${slug}.mdx`,
    });

    const { data } = pageResponse;

    if (!data.page) {
      notFound();
    }

    return (
      <PageClient
        query={pageResponse.query}
        variables={pageResponse.variables}
        data={pageResponse.data}
      />
    );
  } catch (error) {
    console.error("Error loading page:", error);
    notFound();
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  try {
    const pageResponse = await client.queries.page({
      relativePath: `${slug}.mdx`,
    });

    return {
      title: pageResponse.data.page.title || "Page",
      description: pageResponse.data.page.title || "",
    };
  } catch (error) {
    return {
      title: "Page Not Found",
    };
  }
}
