import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SelectedProduct } from "../types";

export interface BuilderState {
  selections: Record<string, SelectedProduct>;
}

const initialState: BuilderState = {
  selections: {
    "cam-v4": {
      productId: "cam-v4",
      selectedVariantId: "white",
      quantities: {
        white: 1,
        grey: 0,
        black: 0,
      },
    },

    "cam-pan-v3": {
      productId: "cam-pan-v3",
      selectedVariantId: "white",
      quantities: {
        white: 2,
        black: 0,
      },
    },

    "cam-floodlight-v2": {
      productId: "cam-floodlight-v2",
      selectedVariantId: "white",
      quantities: {
        white: 0,
        black: 0,
      },
    },

    "duo-doorbell": {
      productId: "duo-doorbell",
      selectedVariantId: "default",
      quantities: {
        default: 0,
      },
    },

    "battery-cam-pro": {
      productId: "battery-cam-pro",
      selectedVariantId: "white",
      quantities: {
        white: 0,
        black: 0,
      },
    },

    ///

    "motion-sensor": {
      productId: "motion-sensor",
      selectedVariantId: "default",
      quantities: {
        default: 2,
      },
    },

    "sense-hub": {
      productId: "sense-hub",
      selectedVariantId: "default",
      quantities: {
        default: 1,
      },
    },

    "micro-sd-card": {
      productId: "micro-sd-card",
      selectedVariantId: "default",
      quantities: {
        default: 2,
      },
    },
  },
};
const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    // select Varient Or the same product but another color here we change color only the quanitiy still
    selectVariant: (
      state,
      action: PayloadAction<{ productId: string; variantId: string }>,
    ) => {
      const { productId, variantId } = action.payload;

      const productSelection = state.selections[productId];

      if (!productSelection) return;

      productSelection.selectedVariantId = variantId;
    },

    // incrementQuantity

    incrementQuantity: (
      state,
      action: PayloadAction<{
        productId: string;
        variantId?: string;
      }>,
    ) => {
      const { productId, variantId } = action.payload;

      const productSelection = state.selections[productId];

      if (!productSelection) return;

      const targetVariantId = variantId ?? productSelection.selectedVariantId;

      const currentQuantity = productSelection.quantities[targetVariantId] ?? 0;

      productSelection.quantities[targetVariantId] = currentQuantity + 1;
    },

    decrementQuantity: (
      state,
      action: PayloadAction<{
        productId: string;
        variantId?: string;
      }>,
    ) => {
      const { productId, variantId } = action.payload;

      const productSelection = state.selections[productId];

      if (!productSelection) return;

      const targetVariantId = variantId ?? productSelection.selectedVariantId;

      const currentQuantity = productSelection.quantities[targetVariantId] ?? 0;

      if (currentQuantity <= 0) return;

      productSelection.quantities[targetVariantId] = currentQuantity - 1;
    },
  },
});

export const { selectVariant, incrementQuantity, decrementQuantity } =
  builderSlice.actions;

export default builderSlice.reducer;
