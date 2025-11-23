"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Strategic Growth Planning",
    description: "Tailored strategies to boost your business's financial performance.",
  },
  {
    title: "Expert Financial Insights",
    description: "Access to in-depth analysis and recommendations from industry specialists.",
  },
  {
    title: "Optimized Investment Strategies",
    description: "Expert guidance on investments to maximize returns and minimize risks.",
  },
];

export default function TwoColumn() {
  return (
    <section className="two_column_comp">
      <div className="two_column-thumb_wr">
        <img
          src="/images/photos/team-discussion.avif"
          loading="lazy"
          sizes="(max-width: 767px) 100vw, 50vw"
          alt="Showing Painting to the client"
          className="aspect-ratio-large"
        />
      </div>
      <div className="two_column_content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="title-small is-neon">Advice</div>
          <div className="padding-bottom padding-xsmall"></div>
          <h2 className="text-color-white">Focused Strategies for Financial Success and Growth</h2>
        </motion.div>
        <div className="padding-bottom padding-medium"></div>
        <div className="w-layout-hflex custom-list">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="custom-list-item"
            >
              <img
                src="/images/icons/arrow.svg"
                loading="lazy"
                alt="arrow icon"
                className="icon_28"
              />
              <div className="custom-list-item-content">
                <h3 className="text-color-white">{feature.title}</h3>
                <div className="padding-bottom padding-xsmall"></div>
                <p className="custom-list-paragraph-imp">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
