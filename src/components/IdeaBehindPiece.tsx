import React from "react";
import Placeholder from "./Placeholder";
import { COPY } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import "./IdeaBehindPiece.css";

const IdeaBehindPiece: React.FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section
      className="idea-section"
      aria-labelledby="idea-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container idea-section__inner reveal${isVisible ? " is-visible" : ""}`}>
        <h2 id="idea-heading" className="idea-section__heading">
          {COPY.ideaHeading}
        </h2>

        <div className="idea-section__images">
          <figure className="idea-section__figure">
            <Placeholder ratio="4/5" caption={COPY.ideaCaption1} />
            <figcaption className="label idea-section__figcaption">
              {COPY.ideaCaption1}
            </figcaption>
          </figure>

          <figure className="idea-section__figure">
            <Placeholder ratio="4/5" caption={COPY.ideaCaption2} />
            <figcaption className="label idea-section__figcaption">
              {COPY.ideaCaption2}
            </figcaption>
          </figure>
        </div>

        <p className="idea-section__body">{/* TODO(copy) */}{COPY.ideaBody}</p>
      </div>
    </section>
  );
};

export default IdeaBehindPiece;

