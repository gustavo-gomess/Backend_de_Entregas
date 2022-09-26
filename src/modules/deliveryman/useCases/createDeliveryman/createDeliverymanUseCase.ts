import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ password, username }: ICreateDeliveryman) {
    //verifica se existe
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (deliverymanExist) {
      throw new Error("Client already exists");
    }

    //criptografar  a senha
    const hashPassword = await hash(password, 10);

    //salvar o deliveyman
    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password,
      },
    });
    return deliveryman;
  }
}
