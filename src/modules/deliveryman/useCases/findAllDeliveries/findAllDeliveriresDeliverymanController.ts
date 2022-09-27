import { Request, Response } from "express";
import { findAllDeliveriresDeliverymanUseCase } from "./findAllDeliveriresDeliverymanUseCase";

export class FindAllDeliveriresDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;

    const findAllDeliveriresUseCase =
      new findAllDeliveriresDeliverymanUseCase();
    const deliveries = await findAllDeliveriresUseCase.execute(id_deliveryman);

    return response.json(deliveries);
  }
}
