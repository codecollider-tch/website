"use client";

import { useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

interface Sector {
  id?: string;
  title?: string | null;
  image?: string | null;
}

interface SectorsProps {
  sectors?: Sector[];
}

function SectorCard({ sector }: { sector: Sector }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="sector_thumbnail"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={sector.image || "/images/photos/default-sector.avif"}
        alt={sector.title || "Sector"}
        width={300}
        height={400}
        className="aspect-ratio-large"
      />
      <div className="sector_thumbnail-overlay"></div>
      <h3 className="sector_thumbnail-title">{sector.title}</h3>
    </div>
  );
}

export default function Sectors({ sectors = [] }: SectorsProps) {
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
            {sectors.map((sector, index) => (
              <SectorCard key={sector.id || index} sector={sector} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
