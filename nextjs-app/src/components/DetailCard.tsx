"use client";

import Image from "next/image";
import { Product } from "@/types";
import Swal from "sweetalert2";

interface DetailCardProps {
  product: Product;
}

const DetailCard = ({ product }: DetailCardProps) => {
  const isValidURL = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleAddToWishlist = async () => {
    try {
      const test = await fetch("/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: product._id }),
      });
      if (test.ok) {
        Swal.fire({
          icon: "success",
          title: "Added to Wishlist",
          text: "Product has been added to your wishlist",
          showConfirmButton: false,
          timer: 1000,
        });
      }

      if (!test.ok) {
        Swal.fire({
          icon: "error",
          title: "failed to add to wishlist",
          text: "user must be logged in to add to wishlist",
        });
      }
    } catch (error) {
      console.error("Error adding product to wishlist:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        {isValidURL(product.thumbnail) && (
          <div className="flex h-64 overflow-hidden">
            <div className="w-1/3 relative">
              <Image
                src={product.thumbnail}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-1/3 relative">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-1/3 relative">
              <Image
                src={product.images[1]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-gray-600 mb-2">
            tags: {product.tags[0]}, {product.tags[1]}, {product.tags[2]}
          </p>
          <p className="text-gray-800 font-bold">
            ${product.price.toLocaleString()}
          </p>
          <div className="mt-4">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
            }`}
              onClick={handleAddToWishlist}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
