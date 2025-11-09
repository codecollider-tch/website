'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  data?: {
    badge?: string | null;
    title?: string | null;
    description?: string | null;
    buttonText?: string | null;
    buttonLink?: string | null;
    image?: string | null;
  };
}

export default function Hero({ data }: HeroProps) {
  const badge = data?.badge || 'Empower Your Brand';
  const title = data?.title || 'Elevate Your Business with Expert Website Consulting';
  const description = data?.description || "Transform your online presence with expert website consulting. We provide tailored strategies and designs to drive your business's growth. Let's build your digital future together.";
  const buttonText = data?.buttonText || 'Know More';
  const buttonLink = data?.buttonLink || '/contact';
  const image = data?.image || '/images/photos/hero-team.avif';

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
                <div className="title-small is-neon">{badge}</div>
                <div className="padding-bottom padding-xsmall"></div>
                <h1 className="text-color-white heading-style-h2">
                  {title}
                </h1>
                <div className="padding-bottom padding-xsmall"></div>
                <p className="body_one">
                  {description}
                </p>
              </div>
              <div>
                <Link
                  href={buttonLink}
                  className="button is-medium w-button"
                >
                  {buttonText}
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              src={image}
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
