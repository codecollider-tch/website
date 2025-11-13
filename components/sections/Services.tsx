'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface Service {
  id?: string;
  title?: string | null;
  description?: string | null;
  icon?: string | null;
  iconHover?: string | null;
  href?: string | null;
}

interface ServicesProps {
  services?: Service[];
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card_grid_inner"
    >
      <Link
        href={service.href || '#'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="card-regular w-inline-block"
      >
        <div className="card-inner">
          <div className="card-header">
            <div className="card_icon_wr" style={{ position: 'relative', width: '100%', height: '48px' }}>
              <Image
                src={service.icon || '/images/icons/default-icon.svg'}
                alt={service.title || 'Service icon'}
                fill
                className="card_icon-default object-contain"
                style={{
                  filter: isHovered
                    ? 'brightness(0) saturate(100%) invert(77%) sepia(74%) saturate(433%) hue-rotate(353deg) brightness(103%) contrast(101%)'
                    : 'none',
                  transition: 'filter 0.3s'
                }}
              />
            </div>
            <h3 className="heading-style-h3">{service.title}</h3>
          </div>
          <div className="card-content-wrapper">
            <p className="text-lighter">{service.description}</p>
            <div className="text-align-left card-button-wrapper">
              <div className="button is-grid-button">
                <div>Details</div>
                <div className="icon-1x1-small w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M4.16675 10.5H15.8334"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 4.66663L15.8333 10.5L10 16.3333"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Services({ services = [] }: ServicesProps) {
  return (
    <section className="services">
      <div className="padding-global padding-section-large-xx">
        <div className="container-large">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="title_block"
          >
            <div className="title-small">Business consulting</div>
            <div className="padding-top padding-xsmall"></div>
            <div className="title-row">
              <h2>What services do we offer for your business</h2>
              <div className="title_block-right">
                <p className="body_one-dark">
                  See how our tailored solutions can boost your business. From planning to support, we provide the expertise to drive your success.
                </p>
                <div className="padding-bottom padding-regular"></div>
                <Link href="/services" className="text-link-dark">
                  All services
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="padding-bottom padding-medium"></div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="cards_grid">
              {services.map((service, index) => (
                <ServiceCard key={service.id || index} service={service} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
