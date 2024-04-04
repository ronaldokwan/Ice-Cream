import { ObjectId } from "mongodb";

// User Data
export interface User {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
}

// Product Data
export interface Product {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Wishlist Data
export interface Wishlist {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
