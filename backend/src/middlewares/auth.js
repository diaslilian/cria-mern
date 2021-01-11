import jwt from "jsonwebtoken";
import { promisify } from "util";
const SECRET = process.env.SECRET;

export default async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).send("Header authorization error.");
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, SECRET);

    request.userId = decoded.id;

    return next();
  } catch (err) {
    return response.status(403).send("Invalid token.");
  }
};
