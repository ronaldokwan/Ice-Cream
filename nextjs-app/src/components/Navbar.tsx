import Link from "next/link";
import { cookies } from "next/headers";
import LogoutButton from "./LogoutButton";
import Image from "next/image";

const Navigation = () => {
  const auth = cookies().get("Authorization")?.value;
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              src="https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Misc%20and%20Sitewide%20Assets/Product%20Icons%20(Browse%20Cat%2c%20Available%20As%2c%20Shop)/37553_Scoop_Shops_Flavor_Landing_Icons.png?imwidth=1920"
              alt="Banner"
              width={50}
              height={50}
              className="object-cover"
            />
            <Link href="/" className="text-white font-bold">
              Home
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/products"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                All Products
              </Link>
              <Link
                href="/wishlist"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Wishlist
              </Link>
              {!auth && (
                <>
                  <Link
                    href="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Create Account
                  </Link>
                </>
              )}
              {auth && <LogoutButton />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
