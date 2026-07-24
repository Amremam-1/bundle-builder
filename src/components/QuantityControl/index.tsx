interface QuantityControlProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  size?: "sm" | "md";
}

const QuantityControl = ({
  quantity,
  onIncrement,
  onDecrement,
  size = "md",
}: QuantityControlProps) => {
  const buttonSize = size === "sm" ? "size-5 text-xs" : "size-6 text-sm";
  const quantitySize = size === "sm" ? "text-sm" : "text-lg";

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        disabled={quantity === 0}
        onClick={onDecrement}
        className={`
          flex items-center justify-center rounded
          ${buttonSize}
          ${
            quantity === 0
              ? "cursor-not-allowed border-2 border-[#E6EBF0] text-[#E6EBF0]"
              : "bg-[#F0F4F7] text-[#525963]"
          }
        `}
        aria-label="Decrease quantity"
      >
        −
      </button>

      <span className={`min-w-4 text-center font-semibold ${quantitySize}`}>
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrement}
        className={`
          flex items-center justify-center rounded
          bg-[#F0F4F7] text-[#525963]
          ${buttonSize}
        `}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;
