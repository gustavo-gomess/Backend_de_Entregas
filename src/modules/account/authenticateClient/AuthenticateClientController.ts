import { Request, Response } from "express";
import { AuthenticateClientrUseCase } from "./AuthenticateClientUseCase";

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateClientrUseCase = new AuthenticateClientrUseCase();
    const result = await authenticateClientrUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}
