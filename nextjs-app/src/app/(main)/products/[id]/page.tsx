"use client";

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "@/components/ProductCard";
import { getProduct } from "@/actions/products";
import { Product } from "@/types";
const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // Fetch products using a custom API or fetch function
    const res = await getProduct();
    setProducts((prevProducts: Product[]) => [...prevProducts, ...res.data]);
    setHasMore(res.data.length > 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <InfiniteScroll
        dataLength={products.length}
        next={fetchProducts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>Nothing more to show</p>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ProductsPage;
