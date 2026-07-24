import type { RootState } from ".";

// return all product
export const selectBuilderSelections = (state: RootState) =>
  state.builder.selections;

// return one product you selected
export const selectProductSelection =
  (productId: string) => (state: RootState) =>
    state.builder.selections[productId];

// return the productColor
export const selectSelectedVariantId =
  (productId: string) => (state: RootState) =>
    state.builder.selections[productId]?.selectedVariantId;

// return the VariantQuantity
export const selectSelectedVariantQuantity =
  (productId: string) => (state: RootState) => {
    const productSelected = state.builder.selections[productId];

    if (!productSelected) return 0;

    const selectedVariantId = productSelected.selectedVariantId;

    return productSelected.quantities[selectedVariantId] ?? 0;
  };

const cameraIds = [
  "cam-v4",
  "cam-pan-v3",
  "cam-floodlight-v2",
  "duo-doorbell",
  "battery-cam-pro",
];

export const selectSelectedCameras = (state: RootState) =>
  cameraIds
    .map((productId) => state.builder.selections[productId])
    .filter(
      (selection) =>
        selection &&
        Object.values(selection.quantities).some((quantity) => quantity > 0),
    );
