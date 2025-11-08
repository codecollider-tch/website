'use client';

import { motion } from 'framer-motion';

const partners = [
  { id: 1, name: 'Logo Ipsum One', logo: '/images/logos/partner-1.svg' },
  { id: 2, name: 'Logo Ipsum 2', logo: '/images/logos/partner-2.svg' },
  { id: 3, name: 'logoipsum 3', logo: '/images/logos/partner-3.svg' },
  { id: 4, name: 'logo Ipsum 4', logo: '/images/logos/partner-4.svg' },
];

export default function Partners() {
  return (
    <section className="partners_comp">
      <div className="padding-global">
        <div className="container-large">
          <div className="logos_grid">
            {partners.map((partner, index) => (
              <motion.img
                key={partner.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                src={partner.logo}
                loading="lazy"
                alt={partner.name}
                className="logo_grid-logo"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
