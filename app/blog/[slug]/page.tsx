import { notFound } from "next/navigation";

import Image from "next/image";

import { TinaMarkdown } from "tinacms/dist/rich-text";

import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import client from "@/tina/__generated__/client";

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
                      <div className="paragraph-small text-lighter">
                        {formatDate(post.date)}
                      </div>
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
        <Footer contact={settings.contact!} social={settings.social!} />
      </>
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
