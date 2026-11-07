import React from "react";
import Placeholder from "./Placeholder";
import { buildWhatsAppLink } from "../config";
import "./ProductCard.css";

export type ProductStatus = "available" | "made_to_order" | "sold";

export interface Product {
  sku: string;
  name: string;
  category: string;
  description: string;
  materials: string;
  dimensions: string;
  price_inr: number;
  price_usd: number;
  status: ProductStatus;
  images: string[];
}

interface ProductCardProps {
  product: Product;
  currency: "INR" | "USD";
  onSelect?: (product: Product) => void;
}

const STATUS_LABELS: Record<ProductStatus, string> = {
  available: "Available",
  made_to_order: "Made to order",
  sold: "Sold",
};

const ProductCard: React.FC<ProductCardProps> = ({ product, currency, onSelect }) => {
  const priceDisplay =
    currency === "INR" ? `₹${product.price_inr.toLocaleString("en-IN")}` : `$${product.price_usd}`;

  const whatsappMessage = `Hi Atha Studio! I would like to enquire about "${product.name}" (SKU: ${product.sku}).`;

  return (
    <article className={`product-card ${product.status === "sold" ? "product-card--sold" : ""}`}>
      <div
        className="product-card__image-wrap"
        onClick={() => onSelect?.(product)}
        role={onSelect ? "button" : undefined}
        tabIndex={onSelect ? 0 : undefined}
        onKeyDown={(e) => {
          if (onSelect && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onSelect(product);
          }
        }}
      >
        <Placeholder
          ratio="4/5"
          caption={product.name}
        />
      </div>

      <div className="product-card__info">
        <span className="label product-card__category">{product.category}</span>
        <h3 className="product-card__name">
          {onSelect ? (
            <button
              type="button"
              className="product-card__title-btn"
              onClick={() => onSelect(product)}
            >
              {product.name}
            </button>
          ) : (
            product.name
          )}
        </h3>

        <div className="product-card__meta">
          <span className="product-card__price">{priceDisplay}</span>
          <span className={`product-card__status product-card__status--${product.status}`}>
            {STATUS_LABELS[product.status]}
          </span>
        </div>

        {product.status !== "sold" ? (
          <a
            href={buildWhatsAppLink(whatsappMessage)}
            className="link-arrow product-card__enquire-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
          >
            Enquire →
          </a>
        ) : (
          <span className="product-card__sold-note">Archive piece</span>
        )}
      </div>
    </article>
  );
};

export default ProductCard;

