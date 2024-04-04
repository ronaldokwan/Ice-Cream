import { ObjectId } from "mongodb";
import { db } from "../config/index";
import { Wishlist as WishlistType } from "@/types";

type wishlist = Omit<WishlistType, "_id">;

class Wishlist {
  static wishlistCollection() {
    return db.collection("Wishlist");
  }
  static async create(body: wishlist) {
    const { productId, userId } = body;
    const result = await this.wishlistCollection().insertOne({
      productId,
      userId,
    });
    return {
      _id: result.insertedId,
      productId,
      userId,
    };
  }
  static async findAll(userId: string) {
    const result = this.wishlistCollection()
      .find({
        userId: new ObjectId(userId),
      })
      .toArray();
    return result;
  }
  static async findById(id: string) {
    const result = await this.wishlistCollection().findOne({
      _id: new ObjectId(id),
    });
    return result;
  }
}

export default Wishlist;
