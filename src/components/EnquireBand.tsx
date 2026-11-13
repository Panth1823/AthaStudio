import React from "react";
import { COPY } from "../data/content";
import { buildWhatsAppLink, buildInstagramLink } from "../config";
import { useReveal } from "../hooks/useReveal";

const WHATSAPP_MESSAGE =
  "Hi Atha Studio! I found you through your website and I'd love to enquire about a piece.";

const EnquireBand: React.FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="enquire"
      className="enquire-band"
      aria-labelledby="enquire-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container enquire-band__inner reveal${isVisible ? " is-visible" : ""}`}>
        <p id="enquire-heading" className="enquire-band__line">
          {/* TODO(copy) */}
          {COPY.enquireLine}
        </p>

        <div className="enquire-band__actions">
          <a
            href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {COPY.enquireWhatsAppCta}
          </a>

          <a
            href={buildInstagramLink()}
            className="enquire-band__ig-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {COPY.enquireInstagramLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnquireBand;

