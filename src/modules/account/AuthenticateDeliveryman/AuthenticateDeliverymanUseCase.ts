import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    //receber username, password

    //verifica se username cadastrado
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error("username or password invalid!");
    }

    //verifica se senha corresponde ao seu username
    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("username or password invalid!");
    }

    //gerar um token
    const token = sign({ username }, "9869a8a5bf86ac934c7ef27609a216e7", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return token;
  }
}
