import updateContactService from "../../services/contact/updateContact";
import { IUserUpdate } from "../../interfaces/user";


const updateContactController = async (req, res) => {
  const contactData: IUserUpdate = req.body;
  const contactId = req.params.id;
  const updateContact = await updateContactService(contactId, contactData);
  return res.status(200).json(updateContact);
  
};


export default updateContactController;
