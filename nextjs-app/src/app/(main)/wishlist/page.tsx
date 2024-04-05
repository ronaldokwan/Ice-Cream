"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import swal from "sweetalert2";

interface ProductDetail {
  _id: string;
  name: string;
  price: number;
  slug: string;
  thumbnail: string;
  excerpt: string;
}

interface WishlistItem {
  _id: string;
  productId: string;
  userId: string;
  productsDetail: ProductDetail[];
}

export default function Page() {
  const isValidURL = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  async function fetchWishlist() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/wishlist`);
    const result: { data: WishlistItem[] } = await res.json();
    console.log(result);
    if (res.ok) {
      setWishlist(result.data);
    }
  }

  async function handleDelete(id: string) {
    const result = await swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await fetch(`${process.env.NEXT_PUBLIC_URL}/api/wishlist`, {
        method: "DELETE",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      fetchWishlist();
      swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <h1 className="text-4xl font-bold mb-4">Wishlist</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlist.map((item) => (
          <li key={item._id}>
            {item.productsDetail.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                {isValidURL(product.thumbnail) && (
                  <div className="relative h-64 overflow-hidden">
                    <Link href={`/products/${product.slug}`}>
                      <Image
                        src={product.thumbnail}
                        alt={product.name}
                        fill
                        className="object-cover w-full h-full"
                      />
                    </Link>
                  </div>
                )}
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-2">{product.excerpt}</p>
                  <p className="text-gray-800 font-bold">
                    ${product.price.toLocaleString()}
                  </p>
                </div>
                <div className="p-4">
                  <button
                    className="bg-red-500 text-white rounded px-4 py-2 transition duration-300 ease-in-out hover:bg-red-600"
                    onClick={() => handleDelete(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
