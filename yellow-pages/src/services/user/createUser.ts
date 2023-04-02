import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import AppError from "../../errors/appError";
import { IUser, IUserRequest } from "../../interfaces/user";


const createUserService = async ({name, email, password, phone}: IUserRequest): Promise<IUser> => {

  const getUser = AppDataSource.getRepository(User);
  const userExists = await getUser.findOneBy({ email: email });

  if (userExists) { throw new AppError("This email address is already being used", 409);}

  const passwordHash = await hash(password, 10);

  const newUser = getUser.create({
    name,
    password: passwordHash,
    email,
    phone,
  });

  await getUser.save(newUser);

  return newUser;
};

export default createUserService;
