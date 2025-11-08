'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="section_hero">
      <div className="u-nav-spacer"></div>
      <div className="padding-global padding-horizontal-m-0">
        <div className="container-large">
          <div className="hero_grid">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero_content"
            >
              <div>
                <div className="title-small is-neon">Empower Your Brand</div>
                <div className="padding-bottom padding-xsmall"></div>
                <h1 className="text-color-white heading-style-h2">
                  Elevate Your Business with Expert Website Consulting
                </h1>
                <div className="padding-bottom padding-xsmall"></div>
                <p className="body_one">
                  Transform your online presence with expert website consulting. We provide tailored strategies and designs to drive your business&apos;s growth. Let&apos;s build your digital future together.
                </p>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="button is-medium w-button"
                >
                  Know More
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              src="/images/photos/hero-team.avif"
              loading="eager"
              alt="Team standing happily"
              sizes="(max-width: 991px) 100vw, (max-width: 1279px) 45vw, 508px"
              className="hero_image object-position-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
