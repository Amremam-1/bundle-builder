import { cameras } from "../../../constants/mockData/cameras";
import { extraProducts } from "../../../constants/mockData/extraData";
import { selectBuilderSelections } from "../../../store/builderSelectors";
import { useAppSelector } from "../../../store/hook";

const SummaryRight = () => {
  const selections = useAppSelector(selectBuilderSelections);

  const cameraTotals = cameras.reduce(
    (totals, product) => {
      const selection = selections[product.id];

      if (!selection) return totals;

      const quantity = Object.values(selection.quantities).reduce(
        (sum, currentQuantity) => sum + currentQuantity,
        0,
      );

      if (quantity === 0) return totals;

      const originalTotal = product.price * quantity;

      const discountedPrice = product.discountPercentage
        ? product.price - (product.price * product.discountPercentage) / 100
        : product.price;

      const finalTotal = discountedPrice * quantity;

      totals.original += originalTotal;
      totals.final += finalTotal;

      return totals;
    },
    {
      original: 0,
      final: 0,
    },
  );

  const extraProductsTotals = extraProducts.reduce(
    (totals, product) => {
      const selection = selections[product.id];

      if (!selection) return totals;

      const quantity = Object.values(selection.quantities).reduce(
        (sum, currentQuantity) => sum + currentQuantity,
        0,
      );

      if (quantity === 0) return totals;

      const originalUnitPrice = product.price;
      const finalUnitPrice = product.isFree
        ? 0
        : (product.finalPrice ?? product.price);

      totals.original += originalUnitPrice * quantity;
      totals.final += finalUnitPrice * quantity;

      return totals;
    },
    {
      original: 0,
      final: 0,
    },
  );

  const originalTotal = cameraTotals.original + extraProductsTotals.original;

  const finalTotal = cameraTotals.final + extraProductsTotals.final;

  const savings = originalTotal - finalTotal;

  const monthlyPayment = finalTotal / 9.79;

  return (
    <aside className="min-w-0">
      <div className="flex items-center gap-6">
        <div className="flex size-32 shrink-0 items-center justify-center">
          <img
            src="/images/satisfaction.png"
            alt="100% Wyze satisfaction guarantee"
            className="size-full object-contain"
          />
        </div>

        <div className="hidden xl:block">
          <h2 className="text-xl font-semibold text-text-primary">
            30-day hassle-free returns
          </h2>

          <p className="mt-4 text-lg leading-6 text-text-primary">
            If you're not totally in love with the product, we will refund you
            100%.
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between gap-2 flex-row lg:flex-col xl:flex-row">
        <span className="rounded bg-primary px-3 py-1 text-xs text-white">
          as low as ${monthlyPayment.toFixed(2)}/mo
        </span>

        <div className="flex items-baseline gap-3">
          {savings > 0 && (
            <span className="text-sm text-text-secondary line-through">
              ${originalTotal.toFixed(2)}
            </span>
          )}

          <span className="text-lg font-bold text-primary">
            ${finalTotal.toFixed(2)}
          </span>
        </div>
      </div>

      {savings > 0 && (
        <p className="mt-4 text-center text-sm font-medium text-success">
          Congrats! You're saving ${savings.toFixed(2)} on your security bundle!
        </p>
      )}

      <button
        type="button"
        className="mt-2 w-full rounded bg-primary px-6 py-4 text-lg font-semibold text-white transition hover:bg-primary-hover"
      >
        Checkout
      </button>

      <button
        type="button"
        className="mt-3 w-full text-center text-sm italic text-text-primary underline"
      >
        Save my system for later
      </button>
    </aside>
  );
};

export default SummaryRight;
