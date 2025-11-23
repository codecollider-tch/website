"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

interface ContactHeroProps {
  badge?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: string;
}

export default function ContactHero({
  badge = "Contact",
  title = "Always searching for improved solutions.",
  description = "Reach out for inquiries, support, or to schedule a consultation. We're here to assist you.",
  buttonText = "Know More",
  buttonLink = "/about-us",
  image = "/images/photos/contact-hero.avif",
}: ContactHeroProps) {
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
                <h1 className="text-color-white heading-style-h2">{title}</h1>
                <div className="padding-bottom padding-xsmall"></div>
                <p className="body_one">{description}</p>
              </div>
              <div>
                <Link href={buttonLink} className="button is-medium w-button">
                  {buttonText}
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hero_image object-position-left"
              style={{ position: "relative", width: "100%", height: "100%", minHeight: "400px" }}
            >
              <Image
                src={image}
                alt="Business people discussion"
                fill
                sizes="(max-width: 991px) 100vw, (max-width: 1279px) 50vw, 492px"
                className="object-position-left object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
