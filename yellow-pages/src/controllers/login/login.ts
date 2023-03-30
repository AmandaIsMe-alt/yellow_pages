import loginUserService from "../../services/login/login";

const loginUserController = async (req, res) => {
  const data = req.body;
  const token = await loginUserService(data);
  return res.status(200).json({ token });
};


export default loginUserController;
