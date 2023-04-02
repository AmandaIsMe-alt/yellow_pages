import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact";


  const listContactIDService = async (id: string) => {

  const getContact = AppDataSource.getRepository(Contact);
  const findContact = await getContact.findOneBy({ id: id });

  return findContact;

  };

export default listContactIDService;
