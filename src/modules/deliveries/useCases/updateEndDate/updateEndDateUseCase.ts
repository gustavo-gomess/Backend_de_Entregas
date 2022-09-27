import { prisma } from "../../../../database/prismaClient";

interface IUpdateENdDate {
  id_delivery: string;
  id_deliveryman: string;
}

class UpdateEndUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateENdDate) {
    const result = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
      },
      data: {
        id_deliveryman,
      },
    });
    return result;
  }
}

export { UpdateEndUseCase };
