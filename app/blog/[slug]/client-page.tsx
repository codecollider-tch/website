"use client";

import Image from "next/image";

import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function BlogPostClient(props: {
  query: string;
  variables: object;
  data: any;
  settings: any;
}) {
  const { data } = useTina(props);
  const post = data?.post;
  const settings = props.settings;

  if (!post) return null;

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
    <>
      <Header />
      <main className="page-wrapper">
        <section className="section_blog_post">
          <div className="u-nav-spacer"></div>
          <div className="padding-global">
            <div className="container-large">
              <article className="blog_post_wrapper">
                {/* Header */}
                <header className="blog_post_header">
                  <div className="title-small is-neon">Blog</div>
                  <div className="padding-bottom padding-xsmall"></div>
                  <h1 className="heading-style-h1">{post.title}</h1>
                  <div className="padding-bottom padding-small"></div>
                  <div className="blog_post_meta">
                    <div className="paragraph-small text-lighter">{formatDate(post.date)}</div>
                    {post.author && (
                      <>
                        <span className="text-lighter"> • </span>
                        <div className="paragraph-small text-lighter">By {post.author}</div>
                      </>
                    )}
                  </div>
                </header>

                <div className="padding-bottom padding-medium"></div>

                {/* Featured Image */}
                {post.image && (
                  <>
                    <div className="blog_post_image_wrapper">
                      <Image
                        src={post.image}
                        alt={post.title || "Blog post image"}
                        width={1200}
                        height={600}
                        className="blog_post_image"
                        priority
                      />
                    </div>
                    <div className="padding-bottom padding-large"></div>
                  </>
                )}

                {/* Content */}
                <div className="blog_post_content w-richtext">
                  <TinaMarkdown content={post.body} />
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      {settings && <Footer contact={settings.contact!} social={settings.social!} />}
    </>
  );
}
