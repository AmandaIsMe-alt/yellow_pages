import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import AppError from "../../errors/appError";
import { IUser } from "../../interfaces/user";

const listUserService = async (id: string): Promise<IUser> => {
  
  const getUser = AppDataSource.getRepository(User);

  const user = await getUser.findOneBy({ id: id });

  if (!user) {
    throw new AppError("User id not found or not exists", 404);
  }

  return user;
};

export default listUserService;
