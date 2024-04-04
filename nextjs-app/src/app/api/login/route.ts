import User from "@/db/models/user";
import { z } from "zod";
import { NextResponse } from "next/server";

import { comparePassword } from "@/db/helpers/bcrypt";
import { createToken } from "@/db/helpers/jwt";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;
    const parsedData = z
      .object({
        email: z.string().min(1).email(),
        password: z.string().min(5),
      })
      .safeParse(body);
    if (parsedData.success === false) {
      throw parsedData.error;
    }
    const user = await User.findEmail(email);
    if (!user) {
      throw new Error("Wrong email or password");
    }
    const isValid = comparePassword(password, user.password);
    if (!isValid) {
      throw new Error("Wrong email or password");
    }

    const token = createToken({ _id: user._id, email: user.email });

    cookies().set("Authorization", `Bearer ${token}`);

    return NextResponse.json(
      { data: { token }, message: "POST login success" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message, message: "POST login failed" },
        { status: 400 }
      );
    } else if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message, message: "POST login failed" },
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
