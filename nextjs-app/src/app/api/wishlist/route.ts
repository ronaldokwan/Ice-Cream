import Wishlist from "@/db/models/wishlist";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userId = request.headers.get("x-user-id");

    if (!userId) {
      throw new Error("User ID is missing.");
    }

    const wishlist = await Wishlist.create({
      userId: new ObjectId(String(userId)),
      productId: new ObjectId(String(body.productId)),
      createdAt: new Date(),
      updatedAt: new Date(),
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

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const userId = request.headers.get("x-user-id");
    if (!userId) {
      throw new Error("User ID is missing.");
    }

    const wishlist = await Wishlist.delete(String(id));

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
