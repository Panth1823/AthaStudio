import React from "react";
import Placeholder from "./Placeholder";
import { COPY } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import "./MemoryFeature.css";

const MemoryFeature: React.FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="memories"
      className="memory-feature"
      aria-labelledby="memory-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container memory-feature__inner reveal${isVisible ? " is-visible" : ""}`}>
        <span className="label memory-feature__label">
          {COPY.memorySectionLabel}
        </span>

        <div className="memory-feature__image">
          <Placeholder
            ratio="4/3"
            caption="Old wooden doorway and telephone, a memory from childhood"
            credit="onthegrid"
          />
        </div>

        <div className="memory-feature__text">
          <h2 id="memory-heading" className="memory-feature__title">
            {COPY.memoryTitle}
          </h2>
          <p className="memory-feature__subline">{COPY.memorySubline}</p>
        </div>
      </div>
    </section>
  );
};

export default MemoryFeature;

