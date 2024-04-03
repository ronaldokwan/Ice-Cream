import bcryptjs from "bcryptjs";

export const hashPassword = (password: string): string => {
  const hashedPassword = bcryptjs.hashSync(password, 10);
  return hashedPassword;
};

export const comparePassword = (
  password: string,
  hashedPassword: string
): boolean => {
  const comparedPassword = bcryptjs.compareSync(password, hashedPassword);
  return comparedPassword;
};
