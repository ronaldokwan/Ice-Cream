import jwt, { JwtPayload } from "jsonwebtoken";
import * as jose from "jose";

const secret = process.env.JWT_SECRET as string;

export const createToken = (payload: JwtPayload) => {
  return jwt.sign(payload, secret);
};
export const readPayload = (token: string) => {
  return jwt.verify(token, secret);
};
export const readPayloadJose = async <T>(token: string) => {
  const encodeSecret = new TextEncoder().encode(secret);
  const result = await jose.jwtVerify<T>(token, encodeSecret);
  return result.payload;
};
