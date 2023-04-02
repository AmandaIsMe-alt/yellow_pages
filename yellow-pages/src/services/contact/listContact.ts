import { IContact } from "../../interfaces/contact";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import AppError from "../../errors/appError";


const listContactService = async (id: string): Promise<IContact[]> => {

  const getUser = AppDataSource.getRepository(User);

  const user = await getUser.findOneBy({ id: id });

  if (!user) {
    throw new AppError("User not found or do not exists", 404);
  }

  return user.contacts;
};


export default listContactService;
