import { Product } from "@/types";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { getProduct } from "@/actions/products";

export default async function Home() {
  const res = await getProduct();
  const products = res.data.filter(
    (_: number, index: number) => index >= 0 && index <= 5
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold">
            Welcome to Our Ice Cream Shop
          </h1>
        </div>
      </div>

      {/* Promo Section */}
      <div className="bg-orange-100 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Summer Promo</h2>
        <p className="text-gray-700">
          Get 20% off on all ice cream flavors this summer!
        </p>
      </div>

      {/* About Section */}
      <div className="bg-yellow-100 rounded-lg  p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">About Our Ice Cream Shop</h2>
        <p className="text-gray-700">
          Welcome to our artisanal ice cream shop, where we craft delicious and
          unique flavors using only the freshest ingredients. Our passion for
          ice cream is evident in every scoop, and we take pride in offering a
          wide variety of flavors to satisfy every taste bud.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products?.map((product: Product, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* See All Link */}
      <div className="text-center mt-8">
        <Link
          href="/products"
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          See All Products
        </Link>
      </div>
    </div>
  );
}
