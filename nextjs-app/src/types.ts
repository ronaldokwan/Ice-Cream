// Product Data
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string;
  size: "100g" | "200g" | "500g";
}

// User Data
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}
