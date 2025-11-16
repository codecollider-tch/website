'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ExpertiseCard {
  title?: string | null;
  description?: string | null;
  icon?: string | null;
}

interface AboutExpertiseProps {
  expertiseTitle?: string | null;
  expertise?: ExpertiseCard[];
}

export default function AboutExpertise({ expertiseTitle = 'Empowering your business to expand and thrive', expertise = [] }: AboutExpertiseProps) {
  return (
    <section className="helping_business_block">
      <div className="padding-global">
        <div className="container-large">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="center_title_block"
          >
            <div className="title-small">Consulting</div>
            <div className="padding-bottom padding-xsmall"></div>
            <h2>{expertiseTitle}</h2>
          </motion.div>
          <div className="padding-bottom padding-large"></div>
          <div className="details_card_wr">
            {expertise.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="detail_card"
              >
                {card.icon && (
                  <Image
                    src={card.icon}
                    alt={card.title || ''}
                    width={60}
                    height={60}
                    className="icon_60"
                  />
                )}
                <h4>{card.title}</h4>
                <p className="paragraph text-lighter">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

