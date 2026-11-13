import React from "react";
import Placeholder from "./Placeholder";
import { COPY } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const CreationCorner: React.FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="about"
      className="creation-corner"
      aria-labelledby="creation-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container creation-corner__inner reveal${isVisible ? " is-visible" : ""}`}>
        <div className="creation-corner__image">
          <Placeholder
            ratio="4/3"
            caption={COPY.creationPlaceholderCaption}
            credit="rasaaterracotta"
          />
        </div>

        <div className="creation-corner__text">
          <h2 id="creation-heading" className="creation-corner__heading">
            {COPY.creationHeading}
          </h2>
          <p className="creation-corner__subline">{COPY.creationSubline}</p>
        </div>
      </div>
    </section>
  );
};

export default CreationCorner;

