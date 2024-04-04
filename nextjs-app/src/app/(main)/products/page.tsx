import type { Metadata } from "next";
import { Product } from "@/types";
import { getProduct } from "@/actions/products";
import ProductCard from "@/components/ProductCard";

export const meta: Metadata = {
  title: "E-Commerce",
  description: "E-Commerce Ice Cream Shop",
};

export default async function Home() {
  const products = await getProduct();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.data.map((product: Product) => (
          <ProductCard key={product._id.toString()} product={product} />
        ))}
      </div>
    </div>
  );
}
