"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    async function fetchWishlist() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/wishlist`);
      const result = await res.json();
      if (res.ok) {
        setWishlist(result);
      }
    }
    fetchWishlist();
  }, []);
  return (
    <>
      <h1>Wishlist</h1>
      <ul>
        {JSON.stringify(wishlist)}
        {/* {wishlist.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))} */}
      </ul>
      <Link href="/">Home</Link>
    </>
  );
}
