import React from "react";
import Placeholder from "./Placeholder";
import { COPY } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const Hero: React.FC = () => {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <section
      className="hero"
      aria-labelledby="hero-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Full-width image placeholder */}
      <div className="hero__image container">
        {/* Mobile: 4/3  |  Desktop: 16/9 (via CSS swapping the wrapper height) */}
        <div className="hero__image-mobile">
          <Placeholder ratio="4/3" caption="Hetvi at her work table" credit="trangbricks.co" />
        </div>
        <div className="hero__image-desktop">
          <Placeholder ratio="16/9" caption="Hetvi at her work table" credit="trangbricks.co" />
        </div>
      </div>

      {/* Text block */}
      <div className={`container hero__content reveal${isVisible ? " is-visible" : ""}`}>
        <h1 id="hero-heading" className="hero__heading">
          {COPY.heroHeadline}
        </h1>
        <p className="hero__subline">{COPY.heroSubline}</p>
        <a href="#shop" className="link-arrow hero__cta">
          {COPY.heroCtaLabel}
        </a>
      </div>
    </section>
  );
};

export default Hero;

