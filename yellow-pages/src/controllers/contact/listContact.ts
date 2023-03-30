import listContactService from "../../services/contact/listContact";


const listContactController = async (req, res) => {
  const userId: string = req.user.id;
  const contact = await listContactService(userId);
  return res.status(200).json(contact);
};


export default listContactController;
