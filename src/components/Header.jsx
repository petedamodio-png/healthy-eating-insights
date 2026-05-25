import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

// All new pages must use semantic theme colour classes (bg-theme-bg, text-theme-primary,
// etc.) instead of hardcoded arbitrary values. This ensures dark mode works automatically
// on every new page without additional work. Never use bg-[#FAFAF8], bg-[#1A1A1A], or
// bg-[#F2F2EF] in new components — use bg-theme-bg, bg-theme-dark, bg-theme-alt instead.
// The only hardcoded colours allowed in new pages are the sage green (#8FBF8A), gold
// (#C9A96E), and white text on coloured backgrounds.

function ThemeToggle({ label = false }) {
  const { isDark, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex items-center gap-3 text-theme-primary"
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
    >
      {label && <span className="font-sans text-[14px] text-theme-secondary">Dark mode</span>}
      <span
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
          isDark ? 'bg-[#8FBF8A]' : 'bg-theme-border'
        }`}
      >
        <svg
          className="absolute left-1 h-3 w-3 text-theme-sage-dark"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8Z" />
        </svg>
        <svg
          className="absolute right-1 h-3 w-3 text-theme-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
        <span
          className={`relative z-10 inline-block h-4 w-4 rounded-full bg-white shadow transform transition-transform duration-200 ${
            isDark ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </span>
    </button>
  );
}

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
    <header className="sticky top-0 z-50 bg-theme-nav border-b-0.5 border-theme-border">
      <div className="container-custom flex items-center justify-between h-16">
        {/* Left: Logo */}
        <Link to="/" className="flex items-baseline space-x-1" onClick={() => setIsOpen(false)}>
          <span className="font-serif text-[16px] text-theme-primary tracking-wide leading-none">Healthy Eating</span>
          <span className="font-serif text-[16px] text-theme-sage tracking-wide leading-none">Insights</span>
        </Link>

        {/* Centre: Nav links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-sans text-[14px] leading-none transition-colors ${
                location.pathname === link.path ? 'text-theme-sage font-medium' : 'text-theme-secondary hover:text-theme-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: CTA button */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
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
            className="text-theme-primary focus:outline-none p-1"
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
        <div className="md:hidden border-t-0.5 border-theme-border bg-theme-nav w-full py-4 px-5">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-sans text-[14px] transition-colors ${
                  location.pathname === link.path ? 'text-theme-sage font-medium' : 'text-theme-secondary hover:text-theme-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t-0.5 border-theme-border pt-4">
              <ThemeToggle label />
            </div>
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
