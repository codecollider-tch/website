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

interface LatestBlogsProps {
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
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="posts_lists-item"
    >
      <Link
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="posts_list-anchor w-inline-block"
      >
        <div
          className="posts_list-thumb-wr"
          style={{ position: "relative", width: "100%", height: "100%" }}
        >
          <Image
            src={blog.image || "/images/placeholder.jpg"}
            alt={blog.title || "Blog post image"}
            fill
            className="image_fit object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="posts_list-content-wr">
          <div className="paragraph-small text-lighter">{formatDate(blog.date)}</div>
          <h3 className="heading-style-h4">{blog.title}</h3>
          <div className="w-layout-hflex cta_readmore">
            <div>Read more</div>
            <Image
              src="/images/icons/arrow-light.svg"
              alt="Arrow right"
              width={20}
              height={20}
              className="cta_readmore-icon"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function LatestBlogs({ posts = [] }: LatestBlogsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="latest_news background-color-grey">
      <div className="padding-global padding-section-medium">
        <div className="container-large">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-width-medium margin-center"
          >
            <div className="title-small text-align-center">Blogs</div>
            <div className="padding-bottom padding-xsmall"></div>
            <h2 className="text-align-center">Latest blogs</h2>
          </motion.div>

          <div className="padding-bottom padding-medium"></div>

          <div className="w-layout-vflex posts">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="posts_list"
            >
              {posts.map((blog, index) => (
                <BlogCard key={blog.id || index} blog={blog} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
