import AppError from "../../errors/appError";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact";


const deleteContactService = async (id: string, contactId: string): Promise<void> => {

  const getContact = AppDataSource.getRepository(Contact);
  const contact = await getContact.findOne({
    where: { id: contactId },
    relations: { users: true },
  });

  if (!contact) {
    throw new AppError("Contact not found or do not exists", 404);
  }

  if (contact.users.id !== id) {
    throw new AppError("No authorization", 401);
  }

  await getContact.delete(contact.id);
};


export default deleteContactService;
