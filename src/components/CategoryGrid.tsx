import React from "react";
import Placeholder from "./Placeholder";
import { CATEGORIES } from "../data/content";

interface CategoryGridProps {
  /** Category currently shown in the product grid, or null for all pieces. */
  activeCategory: string | null;
  /** Called with a category label, or null to clear the filter. */
  onSelectCategory: (label: string | null) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ activeCategory, onSelectCategory }) => {
  return (
    <ul className="category-grid" role="list">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.label;

        return (
          <li key={cat.label} className="category-grid__item">
            <button
              type="button"
              className="category-grid__link"
              aria-pressed={isActive}
              onClick={() => onSelectCategory(cat.label)}
            >
              {cat.image ? (
                <img
                  className="category-grid__image"
                  src={cat.image}
                  alt={cat.imageAlt ?? ""}
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <Placeholder ratio="4/5" caption={cat.placeholderCaption} />
              )}
              <span className="label category-grid__label">{cat.label}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryGrid;
