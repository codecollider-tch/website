'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const sectors = [
  { id: 1, title: 'Technology', image: '/images/photos/sector-technology.avif' },
  { id: 2, title: 'Healthcare', image: '/images/photos/sector-healthcare.avif' },
  { id: 3, title: 'Financial Services', image: '/images/photos/sector-financial.avif' },
  { id: 4, title: 'Manufacturing', image: '/images/photos/sector-manufacturing.avif' },
  { id: 5, title: 'Retail', image: '/images/photos/sector-retail.avif' },
  { id: 6, title: 'Energy', image: '/images/photos/sector-energy.avif' },
  { id: 7, title: 'Real Estate', image: '/images/photos/sector-realestate.avif' },
  { id: 8, title: 'Education', image: '/images/photos/sector-education.avif' },
];

function SectorCard({ sector }: { sector: typeof sectors[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="sector_thumbnail"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={sector.image}
        loading="lazy"
        alt={sector.title}
        className="aspect-ratio-large"
      />
      <div className="sector_thumbnail-overlay"></div>
      <h3 className="sector_thumbnail-title">{sector.title}</h3>
    </div>
  );
}

export default function Sectors() {
  return (
    <section className="padding-section-large-xx sectors">
      <div className="padding-global">
        <div className="container-large">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="title_block"
          >
            <div className="title-small">Sectors</div>
            <div className="padding-top padding-xsmall"></div>
            <div className="title-row">
              <h2>Our Expertise Across Various Economic Sectors</h2>
              <div className="title_block-right">
                <div className="padding-bottom padding-regular"></div>
              </div>
            </div>
          </motion.div>

          <div className="padding-bottom padding-medium"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="four_column_grid"
          >
            {sectors.map((sector) => (
              <SectorCard key={sector.id} sector={sector} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
