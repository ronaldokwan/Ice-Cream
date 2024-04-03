import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("masuk middleware");
}

export const config = {
  matcher: "/api/wishlist/:path*",
};
