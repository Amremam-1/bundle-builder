export interface ExtraProduct {
  id: string;
  productName: string;
  image: string;
  price: number;
  category: "sensors" | "accessories" | "plan" | "shipping";
  finalPrice?: number;
  isFree?: boolean;
  billingPeriod?: string;
}

export const extraProducts: ExtraProduct[] = [
  {
    id: "motion-sensor",
    productName: "Wyze Sense Motion Sensor",
    image: "/images/wyze-sense-motion-sensor.png",
    price: 29.99,
    category: "sensors",
  },

  {
    id: "sense-hub",
    productName: "Wyze Sense Hub (Required)",
    image: "/images/wyze-sense-hub.png",
    price: 29.92,
    finalPrice: 0,
    isFree: true,
    category: "sensors",
  },

  {
    id: "micro-sd-card",
    productName: "Wyze MicroSD Card (256GB)",
    image: "/images/wyze-microSD-card.png",
    price: 20.98,
    category: "accessories",
  },

  {
    id: "cam-unlimited",
    productName: "Cam Unlimited",
    image: "/images/plan.png",
    price: 12.99,
    finalPrice: 9.99,
    billingPeriod: "/mo",
    category: "plan",
  },

  {
    id: "fast-shipping",
    productName: "Fast Shipping",
    image: "/images/fast-shipping.png",
    price: 5.99,
    finalPrice: 0,
    isFree: true,
    category: "shipping",
  },
];
