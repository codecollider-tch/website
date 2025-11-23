"use client";

import Image from "next/image";

import { motion } from "framer-motion";

interface ContactData {
  address?: string | null;
  email?: string | null;
  phone?: string | null;
  hours?: {
    weekdays?: string | null;
    weekend?: string | null;
  } | null;
}

interface ContactInfoProps {
  data?: ContactData;
}

export default function ContactInfo({ data }: ContactInfoProps) {
  const address = data?.address || "";
  const email = data?.email || "";
  const phone = data?.phone || "";
  const weekdaysHours = data?.hours?.weekdays || "Mon-Sat: 8 AM - 06 PM";
  const weekendHours = data?.hours?.weekend || "Sun: day off";

  const infoCards = [
    {
      id: "address",
      icon: "/images/icons/location.svg",
      title: "Address",
      content: address,
      isLink: false,
    },
    {
      id: "email",
      icon: "/images/icons/email.svg",
      title: "Email",
      content: email,
      isLink: true,
      href: `mailto:${email}?subject=Query`,
    },
    {
      id: "phone",
      icon: "/images/icons/calling.svg",
      title: "Phone",
      content: phone,
      isLink: true,
      href: `tel:${phone.replace(/\s/g, "")}`,
    },
    {
      id: "hours",
      icon: "/images/icons/clock.svg",
      title: "Opening hours",
      content: null,
      isLink: false,
      hours: { weekdays: weekdaysHours, weekend: weekendHours },
    },
  ];

  return (
    <section className="helping_business_block">
      <div className="padding-global">
        <div className="container-large">
          <div className="details_card_wr is_four_columns">
            {infoCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="detail_card is-small"
              >
                <img src={card.icon} loading="lazy" alt={card.title} className="icon_24" />
                <h4>{card.title}</h4>
                {card.hours ? (
                  <div className="w-layout-vflex hours_wr">
                    <p className="paragraph text-lighter">{card.hours.weekdays}</p>
                    <p className="paragraph text-lighter">{card.hours.weekend}</p>
                  </div>
                ) : card.isLink ? (
                  <a href={card.href} className="quick-text-link underline">
                    {card.content}
                  </a>
                ) : (
                  <p className="paragraph text-lighter">{card.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
