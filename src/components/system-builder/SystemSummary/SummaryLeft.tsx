import { cameras } from "../../../constants/mockData/cameras";
import { extraProducts } from "../../../constants/mockData/extraData";
import { selectSelectedCameras } from "../../../store/builderSelectors";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../../store/builderSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hook";

import QuantityControl from "../../QuantityControl";
import SummaryItem from "./summeryItem";

const SummaryLeft = () => {
  const dispatch = useAppDispatch();

  const sensors = extraProducts.filter(
    (product) => product.category === "sensors",
  );

  const accessories = extraProducts.filter(
    (product) => product.category === "accessories",
  );

  const plan = extraProducts.find((product) => product.category === "plan");

  const shipping = extraProducts.find(
    (product) => product.category === "shipping",
  );

  const selectedCameraSelections = useAppSelector(selectSelectedCameras);

  const selectedCameras = selectedCameraSelections.flatMap((selection) => {
    const product = cameras.find((camera) => camera.id === selection.productId);

    if (!product) return [];

    return Object.entries(selection.quantities)
      .filter(([, quantity]) => quantity > 0)
      .map(([variantId, quantity]) => {
        const variant = product.colors.find((color) => color.id === variantId);

        const finalPrice = product.discountPercentage
          ? product.price - (product.price * product.discountPercentage) / 100
          : product.price;

        return {
          id: `${product.id}-${variantId}`,
          productId: product.id,
          variantId,
          productName: product.productName,
          image: variant?.image ?? product.image,
          variantName: variant?.name,
          quantity,
          price: finalPrice,
        };
      });
  });

  return (
    <div className="min-w-0">
      {/* Header */}
      <header className="border-b border-border pb-3">
        <h2 className="text-2xl font-semibold text-text-primary">
          Your security system
        </h2>

        <p className="mt-1 max-w-xl text-sm leading-5 text-text-muted">
          Review your personalized protection system designed to keep what
          matters most safe.
        </p>
      </header>

      {/* Cameras */}
      {selectedCameras.length > 0 && (
        <section className="border-b border-border py-3">
          <h3 className="mb-3 text-[10px] font-medium tracking-widest text-text-secondary uppercase">
            Cameras
          </h3>

          <div className="space-y-3">
            {selectedCameras.map((camera) => (
              <div key={camera.id} className="flex min-w-0 items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded bg-white">
                  <img
                    src={camera.image}
                    alt={camera.productName}
                    className="size-8 object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-text-primary">
                    {camera.productName}
                  </p>

                  {camera.variantName && (
                    <p className="text-xs text-text-muted">
                      {camera.variantName}
                    </p>
                  )}
                </div>

                <QuantityControl
                  quantity={camera.quantity}
                  size="sm"
                  onIncrement={() =>
                    dispatch(
                      incrementQuantity({
                        productId: camera.productId,
                        variantId: camera.variantId,
                      }),
                    )
                  }
                  onDecrement={() =>
                    dispatch(
                      decrementQuantity({
                        productId: camera.productId,
                        variantId: camera.variantId,
                      }),
                    )
                  }
                />

                <span className="shrink-0 text-sm font-semibold text-primary">
                  ${(camera.price * camera.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sensors */}
      {sensors.length > 0 && (
        <section className="border-b border-border py-3">
          <h3 className="mb-3 text-[10px] font-medium tracking-widest text-text-secondary uppercase">
            Sensors
          </h3>

          <div className="space-y-3">
            {sensors.map((product) => (
              <SummaryItem key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Accessories */}
      {accessories.length > 0 && (
        <section className="border-b border-border py-3">
          <h3 className="mb-3 text-[10px] font-medium tracking-widest text-text-secondary uppercase">
            Accessories
          </h3>

          <div className="space-y-3">
            {accessories.map((product) => (
              <SummaryItem key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Plan */}
      {plan && (
        <section className="border-b border-border py-3">
          <h3 className="mb-3 text-[10px] font-medium tracking-widest text-text-secondary uppercase">
            Plan
          </h3>

          <SummaryItem product={plan} />
        </section>
      )}

      {/* Shipping */}
      {shipping && (
        <section className="py-3">
          <h3 className="mb-3 text-[10px] font-medium tracking-widest text-text-secondary uppercase">
            Shipping
          </h3>

          <SummaryItem product={shipping} />
        </section>
      )}
    </div>
  );
};

export default SummaryLeft;
