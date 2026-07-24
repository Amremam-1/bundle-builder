import type { Product } from "../../../types";
import ProductCard from "../ProductCard";

interface ProductCardsProps {
  products: Product[];
}

const ProductCards = ({ products }: ProductCardsProps) => {
  return (
    <div
      className="
        grid grid-cols-1 gap-4

        md:grid-cols-1
        lg:grid-cols-2
        xl:grid-cols-5

        min-[1200px]:grid-cols-5
      "
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCards;
