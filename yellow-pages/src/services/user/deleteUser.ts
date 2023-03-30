import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import AppError from "../../errors/appError";

const deleteUserService = async (id: string): Promise<void> => {
  
  const getUser = AppDataSource.getRepository(User);
  const user = await getUser.findOneBy({ id: id });

  if (!user) {
    throw new AppError("User id not found or not exists", 404);
  }

  await getUser.delete(user.id);
};

export default deleteUserService;
