import React, { useMemo, useRef, useState } from "react";
import CategoryGrid from "./CategoryGrid";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "../data/products";
import { COPY } from "../data/content";
import { buildWhatsAppLink } from "../config";
import { useReveal } from "../hooks/useReveal";

type Currency = "INR" | "USD";

const ShopSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currency, setCurrency] = useState<Currency>("INR");
  const resultsRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useReveal();

  const products = useMemo(
    () => (activeCategory ? PRODUCTS.filter((p) => p.category === activeCategory) : PRODUCTS),
    [activeCategory],
  );

  const handleSelectCategory = (label: string | null) => {
    // Clicking the selected card again clears the filter.
    const next = label !== null && label === activeCategory ? null : label;
    setActiveCategory(next);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    resultsRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const summary = activeCategory
    ? `${activeCategory} · ${products.length} ${products.length === 1 ? "piece" : "pieces"}`
    : `All pieces · ${products.length}`;

  return (
    <section
      id="shop"
      className="shop-section"
      aria-labelledby="shop-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container reveal${isVisible ? " is-visible" : ""}`}>
        <h2 id="shop-heading" className="shop-section__heading">
          {COPY.categoryHeading}
        </h2>

        <CategoryGrid activeCategory={activeCategory} onSelectCategory={handleSelectCategory} />

        <div className="shop-bar" ref={resultsRef}>
          <p className="shop-bar__summary" aria-live="polite">
            {summary}
          </p>

          {activeCategory && (
            <button type="button" className="shop-bar__clear" onClick={() => handleSelectCategory(null)}>
              {COPY.shopAllLabel}
            </button>
          )}

          <div className="shop-bar__currency" role="group" aria-label="Price currency">
            {(["INR", "USD"] as const).map((code) => (
              <button
                key={code}
                type="button"
                className="shop-bar__currency-btn"
                aria-pressed={currency === code}
                onClick={() => setCurrency(code)}
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {products.length > 0 ? (
          <ul className="product-grid" role="list">
            {products.map((product) => (
              <li key={product.sku}>
                <ProductCard product={product} currency={currency} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="shop-empty">
            <h3 className="shop-empty__title">{COPY.shopEmptyTitle}</h3>
            <p className="shop-empty__line">{COPY.shopEmptyLine}</p>
            <a
              href={buildWhatsAppLink(`Hi Atha Studio! Do you have any ${activeCategory} coming up?`)}
              className="link-arrow"
              target="_blank"
              rel="noopener noreferrer"
            >
              {COPY.shopEmptyCta}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShopSection;
