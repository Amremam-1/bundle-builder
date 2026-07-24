import type { ExtraProduct } from "../../../constants/mockData/extraData";
import { selectSelectedVariantQuantity } from "../../../store/builderSelectors";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../../store/builderSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import QuantityControl from "../../QuantityControl";

interface SummaryItemProps {
  product: ExtraProduct;
}

const SummaryItem = ({ product }: SummaryItemProps) => {
  const dispatch = useAppDispatch();

  const quantity = useAppSelector(selectSelectedVariantQuantity(product.id));

  const totalPrice = product.price * quantity;

  const finalTotalPrice =
    product.finalPrice !== undefined ? product.finalPrice : totalPrice;

  const showQuantityControl =
    product.category === "sensors" || product.category === "accessories";

  return (
    <div className="flex min-w-0 items-center gap-3">
      {/* Image */}
      <div className="flex size-9 shrink-0 items-center justify-center rounded bg-white">
        <img
          src={product.image}
          alt={product.productName}
          className="size-8 object-contain"
        />
      </div>

      {/* Name */}
      <p className="min-w-0 flex-1 truncate text-sm font-medium text-text-primary">
        {product.productName}
      </p>

      {/* Quantity */}
      {showQuantityControl && (
        <QuantityControl
          quantity={quantity}
          size="sm"
          onDecrement={() =>
            dispatch(
              decrementQuantity({
                productId: product.id,
              }),
            )
          }
          onIncrement={() =>
            dispatch(
              incrementQuantity({
                productId: product.id,
              }),
            )
          }
        />
      )}

      {/* Price */}
      <div className="flex shrink-0 items-center gap-2">
        {product.isFree ? (
          <>
            <span className="text-xs text-text-secondary line-through">
              ${product.price.toFixed(2)}
            </span>

            <span className="text-sm font-semibold text-primary">FREE</span>
          </>
        ) : product.finalPrice !== undefined ? (
          <>
            <span className="text-xs text-text-secondary line-through">
              ${product.price.toFixed(2)}
              {product.billingPeriod && `${product.billingPeriod}`}
            </span>

            <span className="text-sm font-semibold text-primary">
              ${finalTotalPrice.toFixed(2)}
              {product.billingPeriod && `${product.billingPeriod}`}
            </span>
          </>
        ) : (
          <span className="text-sm font-semibold text-primary">
            ${totalPrice.toFixed(2)}
          </span>
        )}
      </div>
    </div>
  );
};

export default SummaryItem;
