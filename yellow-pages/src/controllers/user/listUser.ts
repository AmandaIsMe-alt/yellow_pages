import listUserService from "../../services/user/listUser";


const listUserController = async (req, res) => {
  const userId = req.user.id;
  const listUser = await listUserService(userId);
  return res.status(200).json(listUser);
};


export default listUserController;
