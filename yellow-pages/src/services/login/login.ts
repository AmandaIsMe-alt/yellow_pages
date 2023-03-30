import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { IUserLogin } from "../../interfaces/user";
import AppError from "../../errors/appError";
import "dotenv/config";


const loginUserService = async ({email, password}: IUserLogin): Promise<string> => {

  const getUser = AppDataSource.getRepository(User);
  const user = await getUser.findOneBy({ email: email });

  if (!user) {
    throw new AppError("Wrong user or password", 403);
  }

  const passwordCompare = await compare(password, user.password);

  if (!passwordCompare) {
    throw new AppError("Wrong user or password", 403);
  }

  const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );

  return token;
};


export default loginUserService;
