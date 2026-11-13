import React, { useState } from "react";
import { NAV_LINKS } from "../data/content";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu  = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {/* TODO: Replace wordmark text with the real handwritten Atha SVG/logo mark */}
        <a href="/" className="site-header__wordmark" aria-label="Atha Studio — home">
          अtha Studio
        </a>

        {/* Desktop nav */}
        <nav className="site-header__nav" aria-label="Main navigation">
          <ul className="site-header__nav-list" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="site-header__nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="site-header__menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          <span className="site-header__hamburger" aria-hidden="true">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile nav drawer */}
      <nav
        id="mobile-menu"
        className={`site-header__mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="site-header__mobile-link"
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

