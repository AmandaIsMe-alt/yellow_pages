import createContactService from "../../services/contact/createContact";
import { IContact } from "../../interfaces/contact";


const createContactController = async (req, res) => {
  const userId = req.user.id;
  const userData: IContact = req.body;
  const createContact = await createContactService(userId, userData);
  return res.status(201).json(createContact);
};

export default createContactController;
