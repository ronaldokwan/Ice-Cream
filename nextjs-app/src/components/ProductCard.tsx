import Image from "next/image";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isValidURL = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {isValidURL(product.thumbnail) && (
        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">{product.excerpt}</p>
        <p className="text-gray-800 font-bold">
          ${product.price.toLocaleString()}
        </p>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
