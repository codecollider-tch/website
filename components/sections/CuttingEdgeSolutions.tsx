"use client";

import Link from "next/link";

import { motion } from "framer-motion";

interface CuttingEdgeSolutionsProps {
  badge?: string | null;
  title?: string | null;
  description?: string | null;
  buttonText?: string | null;
  buttonLink?: string | null;
  image?: string | null;
  reverse?: boolean;
}

export default function CuttingEdgeSolutions({
  badge = "Solution",
  title = "Cutting-Edge Solutions for Modern Enterprises",
  description = "Delivering innovative strategies and advanced solutions to drive success in today's evolving business landscape. Empowering modern enterprises with the tools to stay ahead of the curve.",
  buttonText = "Get In Touch",
  buttonLink,
  image,
  reverse = false,
}: CuttingEdgeSolutionsProps) {
  return (
    <section className={reverse ? "fifty_fifty_alternate padding-section-large-x" : "fifty_fifty_comp padding-section-large-xx"}>
      <div className="padding-global padding-m-0">
        <div className={reverse ? "container-large" : "container-large position-relative"}>
          {!reverse && <div className="gradient-glow-vector"></div>}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={reverse ? "fifty_fifty-grid reverse" : "fifty_fifty-grid"}
          >
            <div className="fifty_fifty-grid-left">
              <div>
                <div className={reverse ? "title-small text-lighter" : "title-small is-neon"} style={reverse ? { color: "rgb(23, 29, 47)" } : undefined}>
                  {badge}
                </div>
                <div className="padding-bottom padding-xsmall"></div>
                <h2 className={reverse ? "" : "text-color-white"}>{title}</h2>
              </div>
              <p className={reverse ? "text-lighter" : "body_one text-lighter"} style={reverse ? { color: "rgb(23, 29, 47)" } : undefined}>
                {description}
              </p>
              <div className="btn_wr">
                <Link href={buttonLink || "/contact"} className={reverse ? "button is-alternate w-button" : "button is-medium w-button"}>
                  {buttonText}
                </Link>
              </div>
            </div>
            <div className="fifty_fifty-grid-right">
              <div className="fifty_fifty_img_wr">
                <img
                  src={image || "/images/photos/cutting-edge.avif"}
                  loading="lazy"
                  alt="Employee Team"
                  className="image_fit"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
