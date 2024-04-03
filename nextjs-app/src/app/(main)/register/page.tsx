import Link from "next/link";
import { Register } from "@/types";
import { redirect } from "next/navigation";

export default function Register() {
  async function registerAction(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(name, username, email, password);
    const res = await fetch("http://localhost:3000/api/register", {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, username, email, password }),
    });
    // const result = await res.json();
    if (!res.ok) {
      return redirect("/register?error=");
    }
    return redirect("/login");
  }
  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          Welcome Back!
        </h1>
        <form action={registerAction}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-white"
              id="name"
              placeholder="name"
              required
              type="name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-white"
              id="username"
              placeholder="username"
              required
              type="username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-white"
              id="email"
              placeholder="your@email.com"
              required
              type="email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-white"
              id="password"
              placeholder="Enter your password"
              required
              type="password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <Link
              className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              href="/login"
            >
              Back to login
            </Link>
          </div>
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            register
          </button>
        </form>
      </div>
    </div>
  );
}
