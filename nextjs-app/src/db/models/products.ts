import { ObjectId } from "mongodb";
import { db } from "../config/index";

class Products {
  static productsCollection() {
    return db.collection("Products");
  }
  static async findAll() {
    const products = await this.productsCollection().find().toArray();
    return products;
  }
  static async findSlug(slug: string) {
    const products = await this.productsCollection().findOne({
      slug,
    });
    return products;
  }
}

export default Products;
