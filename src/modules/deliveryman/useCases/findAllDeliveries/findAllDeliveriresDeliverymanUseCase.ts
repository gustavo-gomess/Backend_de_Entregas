import { prisma } from "../../../../database/prismaClient";

export class findAllDeliveriresDeliverymanUseCase {
  async execute(id_deliveyman: string) {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: id_deliveyman,
      },
      include: {
        Deliveries: true,
      },
    });
  }
}
