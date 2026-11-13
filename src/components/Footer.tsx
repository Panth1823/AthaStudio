import React from "react";
import { COPY } from "../data/content";
import { buildInstagramLink } from "../config";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          {/* TODO: Replace with real logo/wordmark SVG */}
          <span className="site-footer__wordmark">{COPY.footerBrandName}</span>
          <a
            href={buildInstagramLink()}
            className="site-footer__ig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Atha Studio on Instagram"
          >
            @theatha.studio
          </a>
        </div>

        <nav aria-label="Footer links">
          <ul className="site-footer__links" role="list">
            {COPY.footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="site-footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="site-footer__copy">
          © {new Date().getFullYear()} Atha Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

