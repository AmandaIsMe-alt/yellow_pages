import { IUserUpdate } from "../../interfaces/user";
import updateUserService from "../../services/user/updateUser";


const updateUserController = async (req, res) => {
  const userId = req.user.id;
  const userData: IUserUpdate = req.body;
  const updateUser = await updateUserService(userId, userData);
  return res.status(200).json(updateUser);
};


export default updateUserController;
