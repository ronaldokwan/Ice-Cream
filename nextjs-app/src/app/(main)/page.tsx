import Link from "next/link";
import type { Metadata } from "next";
import { Product } from "@/types";
import { getProduct } from "@/actions/products";

export const meta: Metadata = {
  title: "E-Commerce",
  description: "E-Commerce Ice Cream Shop",
};

export default async function Home() {
  const products: Product = await getProduct();
  return (
    <>
      <Link href="/login">
        <h1>Login</h1>
      </Link>
    </>
  );
}
