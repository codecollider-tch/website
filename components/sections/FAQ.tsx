"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

interface FAQItem {
  id?: string;
  question?: string | null;
  answer?: string | null;
}

interface FAQProps {
  faqs?: FAQItem[];
}

export default function FAQ({ faqs = [] }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq_section">
      <div className="overlay_60"></div>
      <div className="padding-section-large-xx position-relative">
        <div className="container-large padding-global">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="title-center"
          >
            <div className="title-small is-neon">FAQ</div>
            <div className="padding-bottom padding-xsmall"></div>
            <h2 className="text-color-white">Frequently asked questions</h2>
          </motion.div>
          <div className="padding-bottom padding-medium"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="faq_container"
          >
            {faqs.map((faq, index) => (
              <div
                key={faq.id || index}
                className="faq_item w-dropdown"
                style={{ marginBottom: index < faqs.length - 1 ? "1.5rem" : 0 }}
              >
                <div
                  className="faq_title_block w-dropdown-toggle"
                  onClick={() => toggleFAQ(index)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="heading-style-h4 faq_title">{faq.question}</div>
                  <div className="faq_icon">
                    <motion.div
                      className="faq_plus_vertical"
                      animate={{ opacity: openIndex === index ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="faq_plus_horizontal" />
                  </div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="faq_content_block w-dropdown-list"
                      style={{ overflow: "hidden" }}
                    >
                      <div className="faq_content_inner">
                        <p className="text-lighter">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
