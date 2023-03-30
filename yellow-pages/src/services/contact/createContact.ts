import AppError from "../../errors/appError";
import { IContact } from "../../interfaces/contact";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact";
import { User } from "../../entities/user";


const createContactService = async (id: string,{ name, email, phone }: IContact): Promise<IContact> => {

  const getUser = AppDataSource.getRepository(User);
  const getContact = AppDataSource.getRepository(Contact);
  
  const userExists = await getUser.findOneBy({ id: id });

  if (!userExists) {throw new AppError("User not found or do not exists", 404);}

  const createContact = getContact.create({
    name,
    email,
    phone,
    users: userExists,
  });

  await getContact.save(createContact);

  return createContact;
};

export default createContactService;
