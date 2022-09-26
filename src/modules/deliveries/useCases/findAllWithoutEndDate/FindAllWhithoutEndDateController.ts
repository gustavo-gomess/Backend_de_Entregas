import { Request, Response } from "express";
import { FindAllWhithoutEndDateUseCase } from "./FindAllWhithoutEndDateUseCase";

export class FindAllWhithoutEndDateController {
  async handle(request: Request, response: Response) {
    const findAllWhithoutEndDateUseCase = new FindAllWhithoutEndDateUseCase();

    const deliveries = await findAllWhithoutEndDateUseCase.execute();

    return response.json;
  }
}
