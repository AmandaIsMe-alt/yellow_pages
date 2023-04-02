import  listContactIDService from "../../services/contact/listContactById";

export const listContactByIdController = async (req, res) => {
  const contactId = req.params.id;
  const listContact = await listContactIDService(contactId);
  return res.status(200).json(listContact);
};


export default listContactByIdController;