"use client";

import Link from "next/link";

import { motion } from "framer-motion";

interface TitleCenterCTAProps {
  title?: string | null;
  buttonText?: string | null;
  buttonLink?: string | null;
}

export default function TitleCenterCTA({
  title = "Want to know more? Contact with our business consultant",
  buttonText = "Get in touch",
  buttonLink,
}: TitleCenterCTAProps) {
  return (
    <section className="title_center_component background-color-primary">
      <div className="padding-global">
        <div className="container-large">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="all_center"
          >
            <h2 className="title_center_comp-container">{title}</h2>
            <div className="padding-bottom padding-xsmall"></div>
            <div className="w-layout-vflex title_center-button-wrapper">
              <Link href={buttonLink || "/contact"} className="button is-medium w-button">
                {buttonText}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="gradient_vector-small"></div>
    </section>
  );
}
