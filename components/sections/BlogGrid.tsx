"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

interface Post {
  id?: string;
  _sys?: {
    filename?: string;
  };
  title?: string | null;
  description?: string | null;
  image?: string | null;
  date?: string | null;
  author?: string | null;
}

interface BlogGridProps {
  posts?: Post[];
}

function BlogCard({ blog, index }: { blog: Post; index: number }) {
  const formatDate = (dateString?: string | null) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, ".");
  };

  const href = blog._sys?.filename ? `/blog/${blog._sys.filename}` : "#";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="posts_lists-item is_blog_item"
    >
      <Link
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="posts_list-anchor blog_anchor w-inline-block"
      >
        <div
          className="posts_list-thumb-wr is_blog_thumbnail"
          style={{ position: "relative", width: "100%", height: "100%" }}
        >
          <Image
            src={blog.image || "/images/photos/blog-1.jpg"}
            alt={blog.title || "Blog post image"}
            fill
            className="image_fit object-cover"
            sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, (max-width: 991px) 97vw, (max-width: 1279px) 29vw, 332px"
          />
        </div>
        <div className="posts_list-content-wr is-blog-wr">
          <div className="paragraph-small text-lighter">{formatDate(blog.date)}</div>
          <div className="padding-bottom padding-xsmall"></div>
          <h2 className="heading-style-h4 blog-title">{blog.title}</h2>
          <div className="w-layout-hflex cta_readmore">
            <div>Read more</div>
            <Image
              src="/images/icons/arrow-light.svg"
              alt="Arrow right"
              width={20}
              height={20}
              className="cta_readmore-icon"
              style={{
                transform: isHovered ? "translateX(5px)" : "translateX(0px)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BlogGrid({ posts = [] }: BlogGridProps) {
  if (posts.length === 0) return null;

  return (
    <section className="latest_news background-color-grey">
      <div className="padding-global padding-section-large-x">
        <div className="container-large">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-layout-vflex posts"
          >
            <div className="collection-list-wrapper">
              <div className="posts_list is-blog-list">
                {posts.map((blog, index) => (
                  <BlogCard key={blog.id || index} blog={blog} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
