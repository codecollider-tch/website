import Image from "next/image";
import { notFound } from "next/navigation";

import { TinaMarkdown } from "tinacms/dist/rich-text";

import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import client from "@/tina/__generated__/client";

import BlogPostClient from "./client-page";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const postsResponse = await client.queries.postConnection();
  const posts = postsResponse.data.postConnection.edges || [];

  return posts
    .map((post) => {
      const filename = post?.node?._sys?.filename;
      if (!filename) return null;
      return {
        slug: filename,
      };
    })
    .filter(Boolean);
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  try {
    const postResponse = await client.queries.post({
      relativePath: `${slug}.mdx`,
    });

    const { data } = postResponse;

    if (!data.post) {
      notFound();
    }

    const post = data.post;

    // Fetch settings for footer
    const settingsResponse = await client.queries.settings({
      relativePath: "site.json",
    });
    const settings = settingsResponse.data.settings;

    const formatDate = (dateString?: string | null) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    return (
      <BlogPostClient
        query={postResponse.query}
        variables={postResponse.variables}
        data={postResponse.data}
        settings={settings}
      />
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = await params;

  try {
    const postResponse = await client.queries.post({
      relativePath: `${slug}.mdx`,
    });

    const post = postResponse.data.post;

    return {
      title: `${post.title} - Code Collider Blog`,
      description: post.description || post.title || "",
      openGraph: {
        title: post.title || "",
        description: post.description || "",
        images: post.image ? [post.image] : [],
      },
    };
  } catch (error) {
    return {
      title: "Blog Post Not Found",
    };
  }
}
