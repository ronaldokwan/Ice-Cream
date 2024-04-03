import { ObjectId } from "mongodb";

// User Data
interface User {
  _id?: ObjectId;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
}

// Product Data
interface Product {
  _id?: string;
  name?: string;
  slug?: string;
  description?: string;
  excerpt?: string;
  price?: number;
  tags?: string[];
  thumbnail?: string;
  images?: string[];
  createdAt?: string;
  updatedAt?: string;
}

// Wishlist Data
interface Wishlist {
  _id?: string;
  userId?: User;
  productId?: string;
  createdAt?: string;
  updatedAt?: string;
}
