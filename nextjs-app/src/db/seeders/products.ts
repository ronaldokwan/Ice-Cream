import { Product } from "../../types";
import { db } from "../config/index";
import data from "../data/product.json" assert { type: "json" };

async function seeding() {
  const productsDB = db.collection("Products");
  const products = data;
  const newProducts: Product[] = products.map((product: Product) => {
    product.createdAt = new Date();
    product.updatedAt = new Date();
    return product;
  });
  await productsDB.insertMany(newProducts);
}
seeding();
