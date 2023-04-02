import deleteUserService from "../../services/user/deleteUser";


const deleteUserController = async (req, res) => {
  const userId = req.user.id;
  await deleteUserService(userId);
  return res.status(204).send();
};


export default deleteUserController;
