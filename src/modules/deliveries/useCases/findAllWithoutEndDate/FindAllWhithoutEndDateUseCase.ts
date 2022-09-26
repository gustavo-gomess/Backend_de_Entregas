import { prisma } from "../../../../database/prismaClient";

export class FindAllWhithoutEndDateUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
      },
    });

    return deliveries;
  }
}
