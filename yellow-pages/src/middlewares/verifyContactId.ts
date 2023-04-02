import { Contact } from "../entities/contact";
import { AppDataSource } from "../data-source";
import AppError from "../errors/appError";


const verifyContactIdMiddleware = async (req, res, next) => {
  const id = req.params.id;

  const getContact = AppDataSource.getRepository(Contact);
  const contact = await getContact.findOne({
    where: {id: id},
    relations: {users: true},
  });

  if (req.user.id === contact.users.id) {next()} 
  else {throw new AppError("No authorization", 401)}
};


export default verifyContactIdMiddleware;
