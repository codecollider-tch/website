"use client";

import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function PageClient(props: { query: string; variables: object; data: any }) {
  const { data } = useTina(props);

  if (!data?.page) return null;

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-4 py-16">
        <article className="prose prose-lg max-w-none">
          <h1 className="mb-8 text-4xl font-bold">{data.page.title}</h1>
          <TinaMarkdown content={data.page.body} />
        </article>
      </main>
    </div>
  );
}
