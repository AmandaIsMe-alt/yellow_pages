import deleteContactService from "../../services/contact/deleteContact";

const deleteContactController = async (req, res) => {
  const contactId: string = req.params.id;
  const { id } = req.user;
  await deleteContactService(id, contactId);
  return res.status(204).send();
};


export default deleteContactController;
