"use server";

import { Product } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getProduct() {
  const res = await fetch(`${process.env.URL}/api/products`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return await res.json();
}

export async function createProduct(product: Product) {
  const res = await fetch(`${process.env.URL}/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (res.ok) {
    revalidatePath("/products");
    redirect("/products");
  }
}

export async function deleteProduct(id: string) {
  const res = await fetch(`${process.env.URL}/products/${id}`, {
    method: "DELETE",
  });
  revalidatePath("/products");
}
