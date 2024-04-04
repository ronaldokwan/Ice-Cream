import Wishlist from "@/db/models/wishlist";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userId = request.headers.get("x-user-id");
    const wishlist = await Wishlist.create({
      userId,
      productId: body.productId,
    });
    return NextResponse.json(
      { data: wishlist, message: "POST wishlist success" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const userId = request.headers.get("x-user-id") as string;
    const wishlist = await Wishlist.findAll(userId);
    return NextResponse.json(
      { data: wishlist, message: "GET wishlist success" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
