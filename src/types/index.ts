import type { IconType } from "react-icons";

export interface StepData {
  id: string;
  title: string;
  stepNumber: number;
  icon: IconType;
  products: Product[];
}

export interface ProductColor {
  id: string;
  name: string;
  image: string;
  value: string;
}

export interface Product {
  id: string;
  productName: string;
  description: string;
  image: string;

  price: number;
  discountPercentage?: number;

  learnMoreUrl?: string;

  quantity: number;

  selectedColor: string;
  colors: ProductColor[];
}

export interface SelectedProduct {
  productId: string;
  selectedVariantId: string;
  quantities: Record<string, number>;
}

export interface Plan {
  id: string;
  title: string;
  description: string;
  monthlyPrice: number;
}
