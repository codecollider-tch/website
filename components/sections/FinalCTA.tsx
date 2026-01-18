"use client";

import Link from "next/link";

import { motion } from "framer-motion";

interface FinalCTAProps {
  title?: string | null;
  description?: string | null;
  buttonText?: string | null;
  buttonLink?: string | null;
}

export default function FinalCTA({
  title = "Looking for fresh and innovative ideas?",
  description = "Get ahead with creative solutions from Zeal Consulting. We turn bold ideas into actionable strategies tailored to your goals.",
  buttonText = "Get in touch",
  buttonLink,
}: FinalCTAProps) {
  return (
    <section className="cta_comp padding-section-large-xx">
      <div className="padding-global position-relative">
        <div className="container-large">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="center_content_block"
          >
            <h2 className="text-color-white">{title}</h2>
            <div className="padding-bottom padding-custom1"></div>
            <p className="cetner_paragraph_white">{description}</p>
            <div className="padding-bottom padding-custom1"></div>
            <Link href={buttonLink || "/contact"} className="button is-medium w-button">
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
