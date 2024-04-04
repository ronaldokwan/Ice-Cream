import User from "@/db/models/user";
import { z } from "zod";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, username, email, password } = body;
    const parsedData = z
      .object({
        name: z.string(),
        username: z.string().min(1),
        email: z.string().min(1).email(),
        password: z.string().min(5),
      })
      .safeParse(body);
    if (parsedData.success === false) {
      throw parsedData.error;
    }
    const existingUsername = await User.findUsername(username);
    const existingEmail = await User.findEmail(email);
    if (existingUsername || existingEmail) {
      throw new Error("Username or email already exists");
    }
    const userAdded = await User.register(name, username, email, password);
    return NextResponse.json(
      { data: userAdded, message: "POST register success" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message, message: "POST register failed" },
        { status: 400 }
      );
    } else if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message, message: "POST register failed" },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { error, message: "Internal Server Error" },
        { status: 500 }
      );
    }
  }
}
