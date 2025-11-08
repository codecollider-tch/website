'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Business Website Audit',
    description: 'Assess your website\'s performance and provide improvement recommendations.',
    icon: '/images/icons/service-audit.svg',
    iconHover: '/images/icons/service-audit-hover.svg',
    href: '/services/business-website-audit',
  },
  {
    id: 2,
    title: 'Strategic Website Planning',
    description: 'Create a strategy to align your website with business goals and audience needs.',
    icon: '/images/icons/service-analytics.svg',
    iconHover: '/images/icons/service-analytics-hover.svg',
    href: '/services/strategic-website-planning',
  },
  {
    id: 3,
    title: 'Competitive Analysis',
    description: 'Review competitors\' sites to uncover opportunities for differentiation.',
    icon: '/images/icons/service-competitive.svg',
    iconHover: '/images/icons/service-competitive-hover.svg',
    href: '/services/competitive-analysis',
  },
  {
    id: 4,
    title: 'Conversion Rate Optimization',
    description: 'Enhance design and functionality to boost user engagement and conversions.',
    icon: '/images/icons/service-cro.svg',
    iconHover: '/images/icons/service-cro-hover.svg',
    href: '/services/conversion-rate-optimization',
  },
  {
    id: 5,
    title: 'Brand Positioning and Messaging',
    description: 'Develop content and visuals to clearly communicate your brand\'s value.',
    icon: '/images/icons/service-brand.svg',
    iconHover: '/images/icons/service-brand-hover.svg',
    href: '/services/brand-positioning-and-messaging',
  },
  {
    id: 6,
    title: 'Website Analytics and Reporting',
    description: 'Develop content and visuals to clearly communicate your brand\'s value.',
    icon: '/images/icons/service-analytics.svg',
    iconHover: '/images/icons/service-analytics-hover.svg',
    href: '/services/website-analytics-and-reporting',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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
        href={service.href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="card-regular w-inline-block"
      >
        <div className="card-inner">
          <div className="card-header">
            <div className="card_icon_wr">
              <img
                loading="lazy"
                src={service.icon}
                alt=""
                className="card_icon-default"
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

export default function Services() {
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
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
