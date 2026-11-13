// Atha Studio — Product data access
// The catalogue itself lives in products.json (DESIGN.md § 11).
// Never hard-code a product here; add it to the JSON and it shows up.

import rawProducts from "./products.json";

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

export const PRODUCTS = rawProducts as unknown as Product[];
