import { Request, Response } from "express";
import { UpdateEndUseCase } from "./updateEndDateUseCase";

class UpdateEndController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateEndUseCase = new UpdateEndUseCase();
    const delivery = await updateEndUseCase.execute({
      id_deliveryman,
      id_delivery,
    });

    return response.json(delivery);
  }
}

export { UpdateEndController };
