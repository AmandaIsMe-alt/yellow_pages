import createUserService from "../../services/user/createUser";
import { IUser } from "../../interfaces/user";



const createUserController = async (req, res) => {
  const userData: IUser = req.body;
  const createUser = await createUserService(userData);
  return res.status(201).json(createUser);
};


export default createUserController;
