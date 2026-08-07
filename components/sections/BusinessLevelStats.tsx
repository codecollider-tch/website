"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { motion, useInView } from "framer-motion";

interface Stat {
  title?: string | null;
  percentage?: number | null;
}

interface BusinessLevelStatsProps {
  stats?: Stat[];
}

export default function BusinessLevelStats({ stats = [] }: BusinessLevelStatsProps) {
  return (
    <section className="fifty_fifty_alternate is_feature">
      <div className="padding-section-large-xx">
        <div className="padding-global padding-m-0">
          <div className="container-large">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="fifty_fifty-grid is-feature"
            >
              <div className="fifty_fifty-grid-right">
                <div className="fifty_fifty_img_wr">
                  <Image
                    src="/images/photos/business-level.avif"
                    alt="Team Working on the desk"
                    width={600}
                    height={400}
                    className="image_fit"
                  />
                </div>
              </div>
              <div className="fifty_fifty-grid-left is_business_level">
                <div className="fifty_fifty_title_block">
                  <div className="title-small text-lighter">Business Level</div>
                  <div className="padding-bottom padding-xsmall"></div>
                  <h2>Advance your small business to the next level of success.</h2>
                </div>
                <p className="text-lighter heading-style-h5">
                  Unlock new opportunities and drive sustainable growth for your small business.
                </p>
                <div className="feature_wr">
                  {stats.map((stat, index) => (
                    <ProgressBar
                      key={index}
                      title={stat.title || ""}
                      percentage={stat.percentage || 0}
                      delay={index * 0.2}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgressBar({
  title,
  percentage,
  delay,
}: {
  title: string;
  percentage: number;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setWidth(percentage);
      }, delay * 1000);
    }
  }, [isInView, percentage, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="feature_container"
    >
      <div className="heading-style-h5">{title}</div>
      <div className="padding-bottom padding-xxsmall"></div>
      <div className="progress_bar_wr">
        <div
          className="progress_bar_fill"
          style={{
            width: `${width}%`,
            transition: "width 1s ease-out",
          }}
        />
        <div className="progress_number">{percentage}%</div>
      </div>
    </motion.div>
  );
}
