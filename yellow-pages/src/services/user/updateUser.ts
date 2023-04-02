import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import AppError from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/user";

const updateUserService = async (id: string, { name, email, password, phone }: IUserUpdate): Promise<IUserUpdate> => {
  
  const getUser = AppDataSource.getRepository(User);
  const findUser = await getUser.findOneBy({ id: id });

  if (!findUser) {
    throw new AppError("User id not found or not exists", 404);
  }

  await getUser.update(id, {
    name: name ? name : findUser.name,
    email: email ? email : findUser.email,
    password: password ? await hash(password, 10) : findUser.password,
    phone: phone ? phone : findUser.phone,
  });

  const user = await getUser.findOneBy({ id: id });

  return user;
};

export default updateUserService;
