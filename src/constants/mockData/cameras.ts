import type { Product } from "../../types";

export const cameras: Product[] = [
  {
    id: "cam-v4",
    productName: "Wyze Cam v4",
    description: "The clearest Wyze Cam ever made.",
    image: "/images/cam-v4-white.png",
    price: 35.98,
    discountPercentage: 22,
    quantity: 0,
    learnMoreUrl: "#",
    selectedColor: "white",
    colors: [
      {
        id: "white",
        name: "White",
        image: "/images/color-cam-v4-white.png",
        value: "#FFFFFF",
      },
      {
        id: "grey",
        name: "Grey",
        image: "/images/color-cam-v4-grey.png",
        value: "#9CA3AF",
      },
      {
        id: "black",
        name: "Black",
        image: "/images/color-cam-v4-black.png",
        value: "#111827",
      },
    ],
  },

  {
    id: "cam-pan-v3",
    productName: "Wyze Cam Pan v3",
    description: "360° pan and 180° tilt security camera.",
    image: "/images/cam-pan-v3-white.png",
    price: 39.98,
    discountPercentage: 12,
    quantity: 0,
    learnMoreUrl: "#",
    selectedColor: "white",
    colors: [
      {
        id: "white",
        name: "White",
        image: "/images/color-cam-pan-v3-white.png",
        value: "#FFFFFF",
      },
      {
        id: "black",
        name: "Black",
        image: "/images/color-cam-pan-v3-black.png",
        value: "#111827",
      },
    ],
  },

  {
    id: "cam-floodlight-v2",
    productName: "Wyze Cam Floodlight v2",
    description:
      "2K floodlight camera with a 160° wide-angle view for your garage.",
    image: "/images/floodlight-v2-white.png",
    price: 89.98,
    discountPercentage: 22,
    quantity: 0,
    learnMoreUrl: "#",
    selectedColor: "white",
    colors: [
      {
        id: "white",
        name: "White",
        image: "/images/color-floodlight-v2-white.png",
        value: "#FFFFFF",
      },
      {
        id: "black",
        name: "Black",
        image: "/images/color-floodlight-v2-black.png",
        value: "#111827",
      },
    ],
  },

  {
    id: "duo-doorbell",
    productName: "Wyze Duo Cam Doorbell",
    description: "Two cameras. Two views. Double the porch protection.",
    image: "/images/duo-doorbell-black.png",
    price: 69.98,
    quantity: 0,
    learnMoreUrl: "#",
    selectedColor: "black",
    colors: [],
  },

  {
    id: "battery-cam-pro",
    productName: "Wyze Battery Cam Pro",
    description:
      "Protect anywhere. See everything in 2.5K HDR. No power outlet or electrician needed.",
    image: "/images/battery-cam-pro-white.png",
    price: 89.98,
    quantity: 0,
    learnMoreUrl: "#",
    selectedColor: "white",
    colors: [
      {
        id: "white",
        name: "White",
        image: "/images/color-battery-cam-pro-white.png",
        value: "#FFFFFF",
      },
      {
        id: "black",
        name: "Black",
        image: "/images/color-battery-cam-pro-black.png",
        value: "#111827",
      },
    ],
  },
];
