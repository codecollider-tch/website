'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const blogs = [
  {
    id: 1,
    title: 'Zeal Consulting Expands Services with New Sustainability Consulting Division',
    date: '20.10.2024',
    image: '/images/photos/blog-1.jpg',
    href: '/post/zeal-consulting-expands-services-with-new-sustainability-consulting-division',
  },
  {
    id: 2,
    title: 'Upcoming Webinar: Leveraging Data Analytics for Business Growth',
    date: '15.10.2024',
    image: '/images/photos/blog-2.jpg',
    href: '/post/upcoming-webinar-leveraging-data-analytics-for-business-growth',
  },
  {
    id: 3,
    title: 'Zeal Consulting Achieves ISO 9001 Certification for Quality Management',
    date: '10.10.2024',
    image: '/images/photos/blog-3.jpg',
    href: '/post/zeal-consulting-achieves-iso-9001-certification-for-quality-management',
  },
];

function BlogCard({ blog, index }: { blog: typeof blogs[0]; index: number }) {
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
        href={blog.href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="posts_list-anchor w-inline-block"
      >
        <div className="posts_list-thumb-wr">
          <img
            src={blog.image}
            loading="lazy"
            alt=""
            className="image_fit"
          />
        </div>
        <div className="posts_list-content-wr">
          <div className="paragraph-small text-lighter">{blog.date}</div>
          <h3 className="heading-style-h4">{blog.title}</h3>
          <div className="w-layout-hflex cta_readmore">
            <div>Read more</div>
            <img
              src="/images/icons/arrow-light.svg"
              loading="lazy"
              alt="Arrow right"
              className="cta_readmore-icon"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function LatestBlogs() {
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
              {blogs.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
