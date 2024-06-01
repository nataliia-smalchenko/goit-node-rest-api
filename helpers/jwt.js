import jwt from "jsonwebtoken";

export const createToken = (payload) => {
  const { JWT_SECRET } = process.env;
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "2d" });
};

export const verifyToken = (token) => {
  const { JWT_SECRET } = process.env;
  return jwt.verify(token, JWT_SECRET);
};
