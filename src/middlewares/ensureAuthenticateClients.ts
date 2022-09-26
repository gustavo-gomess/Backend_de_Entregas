import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "token missing",
    });
  }

  // Bearer 9869a8a5bf86ac934c7ef27609a216e7
  // [0] - Bearer
  // [1] - 9869a8a5bf86ac934c7ef27609a216e7
  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "9869a8a5bf86ac934c7ef27609a216e7"
    ) as IPayload;

    request.id_client = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: "invalid token",
    });
  }
}
