import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isOptInPage = location.pathname === '/optin';

  const navLinks = [
    { name: 'Start Here', path: '/start-here' },
    { name: 'Favourites', path: '/favourites' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-off-white border-b-0.5 border-border-gray">
      <div className="container-custom flex items-center justify-between h-16">
        {/* Left: Logo */}
        <Link to="/" className="flex items-baseline space-x-1" onClick={() => setIsOpen(false)}>
          <span className="font-serif text-[16px] text-near-black tracking-wide leading-none">Healthy Eating</span>
          <span className="font-serif text-[16px] text-sage tracking-wide leading-none">Insights</span>
        </Link>

        {/* Centre: Nav links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-sans text-[14px] leading-none transition-colors ${
                location.pathname === link.path ? 'text-sage font-medium' : 'text-text-gray hover:text-near-black'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: CTA button */}
        <div className="hidden md:block">
          {!isOptInPage ? (
            <Link to="/optin" className="btn-pill btn-sage text-white text-[14px] font-sans">
              Get Free Guide
            </Link>
          ) : (
            <div className="w-[124px]" /> /* spacer to preserve layout balance */
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-near-black focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t-0.5 border-border-gray bg-off-white w-full py-4 px-5">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-sans text-[14px] transition-colors ${
                  location.pathname === link.path ? 'text-sage font-medium' : 'text-text-gray hover:text-near-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {!isOptInPage && (
              <div className="pt-2">
                <Link
                  to="/optin"
                  onClick={() => setIsOpen(false)}
                  className="btn-pill btn-sage text-white text-[14px] font-sans w-full text-center block"
                >
                  Get Free Guide
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
