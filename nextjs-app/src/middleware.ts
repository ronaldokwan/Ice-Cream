import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { readPayloadJose } from "./db/helpers/jwt";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/wishlist")) {
    const auth = cookies().get("Authorization")?.value;
    if (!auth) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    const [type, token] = auth?.split(" ");
    if (type !== "Bearer") {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    const decoded = await readPayloadJose<{ _id: string; email: string }>(
      token
    );

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", decoded._id);
    requestHeaders.set("x-user-email", decoded.email);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    return response;
  }
  if (request.nextUrl.pathname.startsWith("/wishlist")) {
    const auth = cookies().get("Authorization")?.value;
    if (!auth) {
      request.nextUrl.pathname = "/login";
      return NextResponse.redirect(request.nextUrl);
    }
  }
}

export const config = {
  matcher: ["/api/wishlist/:path*", "/wishlist/:path*"],
};
