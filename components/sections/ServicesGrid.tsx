"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

interface Service {
  id?: string;
  title?: string | null;
  description?: string | null;
  icon?: string | null;
  iconHover?: string | null;
  href?: string | null;
}

interface ServicesGridProps {
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
      className="w-dyn-item"
    >
      <Link
        href={service.href || "#"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="card-regular w-inline-block"
        style={{
          backgroundColor: isHovered ? "rgb(255, 255, 255)" : "rgb(255, 255, 255)",
          transition: "background-color 0.3s",
        }}
      >
        <div className="card-inner">
          <div className="card-header">
            <div
              className="card_icon_wr"
              style={{
                color: isHovered ? "rgb(23, 29, 47)" : "rgb(23, 29, 47)",
                position: "relative",
                width: "100%",
                height: "48px",
              }}
            >
              <Image
                src={service.icon || "/images/icons/default-icon.svg"}
                alt={service.title || "Service icon"}
                fill
                className="card_icon-default object-contain"
                style={{
                  opacity: isHovered ? 0 : 1,
                  transition: "opacity 0.3s",
                }}
              />
              {service.iconHover && (
                <Image
                  src={service.iconHover}
                  alt={service.title || "Service icon hover"}
                  fill
                  className="card_icon-hover object-contain"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.3s",
                  }}
                />
              )}
            </div>
            <h3
              className="heading-style-h3"
              style={{
                color: isHovered ? "rgb(23, 29, 47)" : "rgb(23, 29, 47)",
              }}
            >
              {service.title}
            </h3>
          </div>
          <div className="card-content-wrapper">
            <p
              className="text-lighter"
              style={{
                color: isHovered ? "rgb(23, 29, 47)" : "rgb(23, 29, 47)",
              }}
            >
              {service.description}
            </p>
          </div>
        </div>
        <div className="text-align-left card-button-wrapper">
          <div
            className="button is-grid-button"
            style={{
              borderColor: "rgba(23, 29, 47, 0.2)",
              backgroundColor: isHovered ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0)",
            }}
          >
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
      </Link>
    </motion.div>
  );
}

export default function ServicesGrid({ services = [] }: ServicesGridProps) {
  return (
    <section className="services">
      <div className="padding-section-large-xx padding-global">
        <div className="container-large">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="title_block"
          >
            <div className="title-small">services</div>
            <div className="padding-top padding-xsmall"></div>
            <div className="title-row">
              <h2>Explore the services we offer to support your business</h2>
              <div className="title_block-right">
                <p className="body_one-dark">
                  See how our tailored solutions can boost your business. From planning to support,
                  we provide the expertise to drive your success.
                </p>
                <div className="padding-bottom padding-regular"></div>
              </div>
            </div>
          </motion.div>

          <div className="padding-bottom padding-medium"></div>

          {/* Services Grid */}
          <div className="w-dyn-list">
            <div role="list" className="cards_grid w-dyn-items">
              {services.map((service, index) => (
                <ServiceCard key={service.id || index} service={service} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
