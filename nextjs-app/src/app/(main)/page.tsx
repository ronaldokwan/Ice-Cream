import type { Metadata } from "next";
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard";
import { ObjectId } from "mongodb";
import Link from "next/link";

export const meta: Metadata = {
  title: "E-Commerce",
  description: "E-Commerce Ice Cream Shop",
};

export default async function Home() {
  const products: Product[] = [
    {
      _id: new ObjectId(),
      name: "Vanilla Bean",
      slug: "vanilla-bean",
      description:
        "A classic and creamy vanilla ice cream made with real vanilla beans.",
      excerpt: "A classic vanilla ice cream made with real vanilla beans.",
      price: 3.99,
      tags: ["classic", "vanilla", "creamy"],
      thumbnail:
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Vanilla%20Ice%20Cream/web_Tower_Vanilla_RGB_HR2_60M.png",
      images: [
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Vanilla%20Ice%20Cream/873564_Vanilla_Enviro_8_1920x1920.jpg?imwidth=1920",
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Vanilla%20Ice%20Cream/873564_Vanilla_Hero_1920x1920.jpg?imwidth=1920",
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: new ObjectId(),
      name: "Chocolate Fudge Brownie",
      slug: "chocolate-fudge-brownie",
      description: "Rich chocolate ice cream loaded with fudge brownie chunks.",
      excerpt: "Chocolate ice cream with fudge brownie chunks.",
      price: 4.49,
      tags: ["chocolate", "brownie", "fudge"],
      thumbnail:
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Chocolate%20Fudge%20Brownie%20Ice%20Cream/web_Tower_ChocolateFudgeBrownie_RGB_HR2_60M.png",
      images: [
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Chocolate%20Fudge%20Brownie%20Ice%20Cream/873564_ChocolateFudgeBrownie_Enviro_1920x1920.jpg?imwidth=1920",
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Chocolate%20Fudge%20Brownie%20Ice%20Cream/873564_ChocolateFudgeBrownie_Hero_1920x1920.jpg?imwidth=1920",
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: new ObjectId(),
      name: "Strawberry Cheesecake",
      slug: "strawberry-cheesecake",
      description:
        "Strawberry ice cream swirled with cheesecake pieces and a graham cracker crunch.",
      excerpt:
        "Strawberry ice cream with cheesecake pieces and graham cracker crunch.",
      price: 4.99,
      tags: ["strawberry", "cheesecake", "graham cracker"],
      thumbnail:
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Cherry%20Garcia%20Ice%20Cream/web_Tower_CherryGarcia_RGB_HR2_60M.png",
      images: [
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Cherry%20Garcia%20Ice%20Cream/873564_CherryGarcia_Enviro_1920x1920.jpg?imwidth=1920",
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Cherry%20Garcia%20Ice%20Cream/873564_CherryGarcia_Hero_1920x1920.jpg?imwidth=1920",
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: new ObjectId(),
      name: "Vanilla Bean",
      slug: "vanilla-bean",
      description:
        "A classic and creamy vanilla ice cream made with real vanilla beans.",
      excerpt: "A classic vanilla ice cream made with real vanilla beans.",
      price: 3.99,
      tags: ["classic", "vanilla", "creamy"],
      thumbnail:
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Vanilla%20Ice%20Cream/web_Tower_Vanilla_RGB_HR2_60M.png",
      images: [
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Vanilla%20Ice%20Cream/873564_Vanilla_Enviro_8_1920x1920.jpg?imwidth=1920",
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Vanilla%20Ice%20Cream/873564_Vanilla_Hero_1920x1920.jpg?imwidth=1920",
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: new ObjectId(),
      name: "Chocolate Fudge Brownie",
      slug: "chocolate-fudge-brownie",
      description: "Rich chocolate ice cream loaded with fudge brownie chunks.",
      excerpt: "Chocolate ice cream with fudge brownie chunks.",
      price: 4.49,
      tags: ["chocolate", "brownie", "fudge"],
      thumbnail:
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Chocolate%20Fudge%20Brownie%20Ice%20Cream/web_Tower_ChocolateFudgeBrownie_RGB_HR2_60M.png",
      images: [
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Chocolate%20Fudge%20Brownie%20Ice%20Cream/873564_ChocolateFudgeBrownie_Enviro_1920x1920.jpg?imwidth=1920",
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Chocolate%20Fudge%20Brownie%20Ice%20Cream/873564_ChocolateFudgeBrownie_Hero_1920x1920.jpg?imwidth=1920",
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: new ObjectId(),
      name: "Strawberry Cheesecake",
      slug: "strawberry-cheesecake",
      description:
        "Strawberry ice cream swirled with cheesecake pieces and a graham cracker crunch.",
      excerpt:
        "Strawberry ice cream with cheesecake pieces and graham cracker crunch.",
      price: 4.99,
      tags: ["strawberry", "cheesecake", "graham cracker"],
      thumbnail:
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Cherry%20Garcia%20Ice%20Cream/web_Tower_CherryGarcia_RGB_HR2_60M.png",
      images: [
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Cherry%20Garcia%20Ice%20Cream/873564_CherryGarcia_Enviro_1920x1920.jpg?imwidth=1920",
        "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Cherry%20Garcia%20Ice%20Cream/873564_CherryGarcia_Hero_1920x1920.jpg?imwidth=1920",
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold">
            Welcome to Our Ice Cream Shop
          </h1>
        </div>
      </div>

      {/* Promo Section */}
      <div className="bg-orange-100 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Summer Promo</h2>
        <p className="text-gray-700">
          Get 20% off on all ice cream flavors this summer!
        </p>
      </div>

      {/* About Section */}
      <div className="bg-yellow-100 rounded-lg  p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">About Our Ice Cream Shop</h2>
        <p className="text-gray-700">
          Welcome to our artisanal ice cream shop, where we craft delicious and
          unique flavors using only the freshest ingredients. Our passion for
          ice cream is evident in every scoop, and we take pride in offering a
          wide variety of flavors to satisfy every taste bud.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products?.map((product: Product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* See All Link */}
      <div className="text-center mt-8">
        <Link
          href="/products"
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          See All Products
        </Link>
      </div>
    </div>
  );
}
