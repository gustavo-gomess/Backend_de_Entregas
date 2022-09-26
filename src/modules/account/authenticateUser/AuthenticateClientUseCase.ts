import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientrUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    //receber username, password

    //verifica se username cadastrado
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error("username or password invalid!");
    }

    //verifica se senha corresponde ao seu username
    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("username or password invalid!");
    }

    //gerar um token
    const token = sign({ username }, "9869a8a5bf86ac934c7ef27609a216e7", {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
