"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

interface BlogHeroProps {
  post?: {
    id?: string;
    _sys?: {
      filename?: string;
    };
    title?: string | null;
    description?: string | null;
    image?: string | null;
    date?: string | null;
    author?: string | null;
  };
}

export default function BlogHero({ post }: BlogHeroProps) {
  if (!post) return null;

  const href = post._sys?.filename ? `/blog/${post._sys.filename}` : "#";

  return (
    <section className="section_hero">
      <div className="u-nav-spacer"></div>
      <div className="padding-global padding-horizontal-m-0">
        <div className="container-large">
          <div className="hero_grid is-blog-list">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="blog_listing_content_wr"
            >
              <div className="title-small is-neon">Blogs</div>
              <div className="padding-bottom padding-xsmall"></div>
              <h1 className="text-color-white heading-style-h2">{post.title}</h1>
              <div className="padding-bottom padding-xsmall"></div>
              <p className="body_one text-light">{post.description}</p>
              <div className="padding-bottom padding-xsmall"></div>
              <Link href={href} className="button is-medium w-button">
                Read More
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Link
                href={href}
                className="blog_listing_thumbnail_wr w-inline-block"
                aria-label="Blog link"
              >
                <Image
                  src={post.image || "/images/photos/blog-1.jpg"}
                  alt={post.title || "Featured blog post"}
                  fill
                  sizes="(max-width: 991px) 100vw, (max-width: 1279px) 45vw, 492px"
                  className="image_fit object-cover"
                  priority
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
