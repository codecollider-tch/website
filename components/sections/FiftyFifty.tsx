'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FiftyFifty() {
  return (
    <section className="fifty_fifty_comp padding-section-large-xx">
      <div className="padding-global padding-m-0">
        <div className="container-large position-relative">
          <div className="gradient-glow-vector"></div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="fifty_fifty-grid"
          >
            <div className="fifty_fifty-grid-left">
              <div>
                <div className="title-small is-neon">Solution</div>
                <div className="padding-bottom padding-xsmall"></div>
                <h2 className="text-color-white">
                  Cutting-Edge Solutions for Modern Enterprises
                </h2>
              </div>
              <p className="body_one text-lighter">
                Delivering innovative strategies and advanced solutions to drive success in today&apos;s evolving business landscape. Empowering modern enterprises with the tools to stay ahead of the curve.
              </p>
              <div className="btn_wr">
                <Link href="/contact" className="button is-medium w-button">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="fifty_fifty-grid-right">
              <div className="fifty_fifty_img_wr">
                <img
                  src="/images/photos/business-man.jpg"
                  loading="lazy"
                  alt="Happy Business man"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 45vw, (max-width: 1279px) 35vw, 416px"
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
