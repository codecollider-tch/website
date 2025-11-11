'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about-us' },
  { name: 'Blogs', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="nav_fixed"
      style={{
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
        transition: 'all 0.3s'
      }}
    >
      <div className="nav_component w-nav">
        <div className="nav_container">
          <Link href="/" className="nav_brand w-nav-brand" aria-label="home">
            <img
              src="/images/logo.svg"
              loading="lazy"
              alt="Code Collider"
              height="Auto"
              className="nav_logo"
            />
          </Link>

          <nav className="nav_menu w-nav-menu">
            <div className="nav_menu_container">
              <div className="nav-menu-inner">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`nav_menu_link w-nav-link ${isActive ? 'w--current' : ''}`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <Link href="/contact" className="button is-nav w-button">
                Get in Touch
              </Link>
              <div className="nav-btn-wrapper"></div>
            </div>
          </nav>

          <div
            className="nav_button w-nav-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            role="button"
            tabIndex={0}
            aria-label="menu"
          >
            <div className="nav_lines_icon">
              <div className="nav_menu-lines">
                <div className="nav_lines-one"></div>
                <div className="nav_lines-two"></div>
                <div className="nav_lines-three"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="w-nav-overlay"
            >
              {/* Add mobile menu content here */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
