import { IContactUpdate } from "../../interfaces/contact";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact";
import AppError from "../../errors/appError";


const updateContactService = async (contactId: string, { name, email, phone }: IContactUpdate): Promise<string> => {

  const getContact = AppDataSource.getRepository(Contact);
  const findContact = await getContact.findOneBy({ id: contactId });


  if (!findContact) {
    throw new AppError("Contact not found or do not exists", 404);
  }


  await getContact.update(findContact.id, {
    name: name ? name : findContact.name,
    email: email ? email : findContact.email,
    phone: phone ? phone : findContact.phone,
  });

  return "Contact updated :)";
};


export default updateContactService;
