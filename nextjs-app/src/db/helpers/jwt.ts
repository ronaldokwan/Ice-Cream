import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET as string;

function signToken(payload: object) {
  return jwt.sign(payload, secret);
}
function verifyToken(token: string) {
  return jwt.verify(token, secret);
}
export { signToken, verifyToken };
