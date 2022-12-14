import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriresUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: id_client,
      },
      include: {
        Deliveries: true,
      },
    });
  }
}
