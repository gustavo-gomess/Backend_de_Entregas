import { Request, Response } from "express";
import { FindAllDeliveriresUseCase } from "./FindAllDeliveriesUseCase";

export class FindAllDeliveriresController {
  async handle(request: Request, response: Response) {
    const { id_client } = request;

    const findAllDeliveriresUseCase = new FindAllDeliveriresUseCase();
    const deliveries = await findAllDeliveriresUseCase.execute(id_client);

    return response.json(deliveries);
  }
}
