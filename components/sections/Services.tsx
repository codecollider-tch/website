"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import ServiceCard from "./ServiceCard";

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
                  See how our tailored solutions can boost your business. From planning to support,
                  we provide the expertise to drive your success.
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
