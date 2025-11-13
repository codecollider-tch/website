'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Office {
  id?: string;
  country?: string | null;
  address?: string | null;
  email?: string | null;
  phone?: string | null;
  image?: string | null;
}

interface OfficeLocationsProps {
  offices?: Office[];
}

const defaultOffices: Office[] = [
  {
    id: '1',
    country: 'United States',
    address: '456 Innovation Park, Suite 101San Francisco, CA 94107',
    email: 'contact@code-collider.tech',
    phone: '+1 (415) 555-6789',
    image: '/images/photos/office-us.avif',
  },
  {
    id: '2',
    country: 'United Kingdom',
    address: '78 Business Road, Floor 2London, SW1A 1AA',
    email: 'contact@code-collider.tech',
    phone: '+44 (20) 7946-1234',
    image: '/images/photos/office-uk.avif',
  },
  {
    id: '3',
    country: 'Australia',
    address: '123 Enterprise Drive, Level 3Sydney, NSW 2000',
    email: 'contact@code-collider.tech',
    phone: '+61 (2) 9876-5432',
    image: '/images/photos/office-au.avif',
  },
];

export default function OfficeLocations({ offices = defaultOffices }: OfficeLocationsProps) {
  return (
    <section className="latest_news background-color-grey">
      <div className="padding-global padding-section-medium">
        <div className="container-large">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="title_block"
          >
            <div className="title-small">Location</div>
            <div className="padding-top padding-xsmall"></div>
            <div className="title-row">
              <h2>Our Working Location</h2>
              <div className="title_block-right">
                <p className="body_one-dark">
                  Discover where we operate and how we can serve you. Our locations offer personalized support.
                </p>
                <div className="padding-bottom padding-regular"></div>
              </div>
            </div>
          </motion.div>

          <div className="padding-bottom padding-medium"></div>

          {/* Office Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-layout-vflex posts is-office"
          >
            {offices.map((office, index) => (
              <div key={office.id || index} className="posts_list office_list">
                <div className="posts_lists-item">
                  <div className="posts_list-anchor">
                    <div className="posts_list-thumb-wr is-location-thumbnail" style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Image
                        src={office.image || '/images/placeholder.jpg'}
                        alt={`${office.country} office`}
                        fill
                        className="image_fit object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="posts_list-content-wr is-office">
                      <div className="heading-style-h4">{office.country}</div>
                      <p className="text-lighter max-width-custom300">
                        {office.address}
                      </p>
                      <a
                        href={`mailto:${office.email}?subject=Query`}
                        className="quick-text-link is-office-link"
                      >
                        {office.email}
                      </a>
                      <a
                        href={`tel:${office.phone?.replace(/\s/g, '')}`}
                        className="quick-text-link"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

