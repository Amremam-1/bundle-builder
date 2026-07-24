import {
  selectProductSelection,
  selectSelectedVariantId,
  selectSelectedVariantQuantity,
} from "../../../store/builderSelectors";
import {
  decrementQuantity,
  incrementQuantity,
  selectVariant,
} from "../../../store/builderSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import type { Product } from "../../../types";
import QuantityControl from "../../QuantityControl";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const productSelection = useAppSelector(selectProductSelection(product.id));
  const selectedVariantId = useAppSelector(selectSelectedVariantId(product.id));
  const selectedVariantQuantity = useAppSelector(
    selectSelectedVariantQuantity(product.id),
  );

  const isSelected = Object.values(productSelection?.quantities ?? {}).some(
    (quantity) => quantity > 0,
  );

  const discountedPrice = product.discountPercentage
    ? product.price - (product.price * product.discountPercentage) / 100
    : product.price;

  return (
    <article
      className={`
        relative min-w-0 rounded-xl bg-white p-3 transition-all

        flex min-h-85 flex-col

        md:grid md:min-h-46.25
        md:grid-cols-[120px_minmax(0,1fr)]
        md:grid-rows-[1fr_auto]
        md:gap-x-4

        xl:flex xl:min-h-85 xl:flex-col xl:gap-0

        ${
          isSelected ? "border-2 border-primary" : "border-2 border-transparent"
        }
      `}
    >
      {/* Discount badge */}
      {product.discountPercentage && (
        <span className="absolute top-3 left-3 z-10 rounded-full bg-primary px-2 py-1 text-[10px] font-semibold text-white">
          Save {product.discountPercentage}%
        </span>
      )}

      {/* Product image */}
      <div
        className="
          relative flex h-37.5 shrink-0 items-center justify-center

          md:h-auto md:w-30

          xl:h-37.5 xl:w-full
        "
      >
        <img
          src={product.image}
          alt={product.productName}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product content */}
      <div className="mt-2 min-w-0 md:mt-0 xl:mt-2">
        <h3 className="text-lg leading-tight font-semibold text-text-primary">
          {product.productName}
        </h3>

        <p className="mt-1 text-sm leading-5 text-text-muted">
          {product.description}{" "}
          {product.learnMoreUrl && (
            <a
              href={product.learnMoreUrl}
              className="font-semibold text-primary underline underline-offset-2"
            >
              Learn More
            </a>
          )}
        </p>

        {/* Colors */}
        {product.colors.length > 0 && (
          <div className="mt-3 grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2">
            {product.colors.map((color) => {
              const isSelectedColor = selectedVariantId === color.id;

              return (
                <button
                  key={color.id}
                  type="button"
                  className={`
                    flex h-7 items-center gap-1 rounded-sm border px-2 text-xs
                    ${isSelectedColor ? "border-success" : "border-border"}
                  `}
                  onClick={() =>
                    dispatch(
                      selectVariant({
                        productId: product.id,
                        variantId: color.id,
                      }),
                    )
                  }
                >
                  <img
                    src={color.image}
                    alt={color.name}
                    className="size-4 object-contain"
                  />

                  <span className="text-xs">{color.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        className="
          mt-auto flex w-full items-end justify-between pt-4

          md:col-span-2
          md:mt-2
          
          md:pt-3

          xl:mt-auto
          xl:border-t-0
          xl:pt-4
        "
      >
        {/* Quantity */}
        <QuantityControl
          quantity={selectedVariantQuantity}
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

        {/* Price */}
        <div className="flex flex-col items-end xl:flex-row xl:items-center xl:gap-2">
          {product.discountPercentage && (
            <span className="text-red-500 text-sm line-through">
              ${product.price.toFixed(2)}
            </span>
          )}

          <span className="text-sm text-text-muted">
            ${discountedPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
