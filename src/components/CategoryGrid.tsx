import React from "react";
import Placeholder from "./Placeholder";
import { CATEGORIES, COPY } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import "./CategoryGrid.css";

const CategoryGrid: React.FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="shop"
      className="category-grid-section"
      aria-labelledby="category-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container reveal${isVisible ? " is-visible" : ""}`}>
        <h2 id="category-heading" className="category-grid-section__heading">
          {COPY.categoryHeading}
        </h2>

        <ul className="category-grid" role="list">
          {CATEGORIES.map((cat) => (
            <li key={cat.label} className="category-grid__item">
              <a href={`#${cat.label.toLowerCase()}`} className="category-grid__link">
                <Placeholder ratio="1/1" caption={cat.placeholderCaption} />
                <span className="label category-grid__label">{cat.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CategoryGrid;

