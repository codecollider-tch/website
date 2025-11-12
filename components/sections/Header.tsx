'use client';

import { useState, useEffect } from 'react';
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
        willChange: 'background',
        backgroundColor: isScrolled ? 'rgb(23, 29, 47)' : 'rgba(23, 29, 47, 0)',
        transition: 'background-color 0.3s ease'
      }}
    >
      <div className="nav_component w-nav" data-collapse="medium">
        <div className="nav_container">
          <Link href="/" className="nav_brand w-nav-brand w--current" aria-label="home">
            <img
              src="/images/logo.svg"
              loading="lazy"
              alt="Code Collider"
              height="Auto"
              className="nav_logo"
            />
          </Link>

          <nav
            className="nav_menu w-nav-menu"
            style={isMobileMenuOpen ? { display: 'flex' } : undefined}
          >
            <div className="nav_menu_container">
              <div className="nav-menu-inner">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`nav_menu_link w-nav-link ${isActive ? 'w--current' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/contact"
                className="button is-nav w-button"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
              <div className="nav-btn-wrapper"></div>
            </div>
          </nav>

          <div
            className={`nav_button w-nav-button ${isMobileMenuOpen ? 'w--open' : ''}`}
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

        <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
      </div>
    </div>
  );
}
