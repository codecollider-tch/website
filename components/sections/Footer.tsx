'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blogs', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/', icon: '/images/icons/facebook.svg' },
  { name: 'X', href: 'https://www.x.com/', icon: '/images/icons/x-twitter.svg' },
  { name: 'Instagram', href: 'https://www.instagram.com/', icon: '/images/icons/instagram.svg' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="footer_component">
      <div className="gradient-patch hide"></div>
      <div className="padding-global position-relative">
        <div className="container-large">
          <div className="footer_comp-grid">
            {/* Column 1 */}
            <div className="footer_col is-one">
              <Link href="/" className="footer-brand w-inline-block">
                <img
                  src="/images/logo.svg"
                  loading="lazy"
                  alt="Code Collider"
                />
              </Link>
              <p className="body_one">
                Expert guidance tailored to your business needs, driving growth and innovation.
              </p>
              <div className="social_share">
                <h5 className="text-color-grey footer-title">Subscribe Us</h5>
                <div className="social_share-row">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social_share-icon w-inline-block"
                    >
                      <img
                        src={social.icon}
                        loading="lazy"
                        alt={social.name}
                        className="social_icon"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="footer_col is_two">
              <div className="footer_links_wr is-two">
                <h5 className="text-color-grey footer-title">Useful links</h5>
                <div className="footer_col_inner is_two_inner">
                  {footerLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="footer_link">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="footer_col is-last">
              <h5 className="text-color-grey">Subscribe for our newsletter</h5>
              <div className="padding-bottom padding-xxsmall"></div>
              <div className="footer_col_inner">
                <div className="form-block w-form">
                  <form onSubmit={handleSubmit}>
                    <div className="form_group is-subscribe">
                      <input
                        className="form_input is-subscribe w-input"
                        maxLength={256}
                        name="Subscribe-Email"
                        placeholder="Your email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <input
                        type="submit"
                        value="Subscribe"
                        className="button is-subscribe w-button"
                      />
                    </div>
                  </form>
                  {isSubmitted && (
                    <div className="thankyou-state w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                  )}
                </div>
                <div className="padding-bottom"></div>
              </div>
              <div className="two_columns">
                <div className="is-addres">
                  <h5 className="text-color-alternate">Address</h5>
                  <div className="padding-top padding-xxsmall"></div>
                  <div className="body_one text-light">
                    1234 Innovation Drive Suite 567 Cityville, State 89012 Country
                  </div>
                </div>
                <div className="quick-contact">
                  <div className="qc_link_wr">
                    <h5 className="text-color-alternate">Email</h5>
                    <div className="padding-top padding-xxsmall"></div>
                    <a href="mailto:info@zealconsult.com" className="link-light-grey">
                      info@zealconsult.com
                    </a>
                  </div>
                  <div className="qc_link_wr">
                    <h5 className="text-color-alternate">Phone</h5>
                    <div className="padding-top padding-xxsmall"></div>
                    <a href="tel:18005551234" className="link-light-grey">
                      +1 (800) 555-1234
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hr"></div>

      <div className="padding-global">
        <div className="container-large">
          <div className="w-layout-hflex copyrights">
            <div className="body_one ligher">
              Developed by{' '}
              <a
                href="http://www.zealousweb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-paragraph-link text-color-white"
              >
                ZealousWeb
              </a>
            </div>
            <div className="body_one ligher">
              Powered by{' '}
              <a
                href="http://webflow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-color-white footer-paragraph-link"
              >
                Webflow
              </a>
            </div>
            <Link href="/template/instructions" className="footer-quick-links text-color-white">
              Instructions
            </Link>
            <Link href="/template/licenses" className="text-color-white footer-quick-links">
              Licenses
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
