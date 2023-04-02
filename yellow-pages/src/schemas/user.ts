import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserLogin, IUserRequest, IUserUpdate } from "../interfaces/user";

const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup.string().email().required("Email is a required field"),
  password: yup.string().required("Password is a required field").min(4,'A senha deve conter pelo menos 4 caracteres'),
  phone: yup.string().required("Phone number is a required field"),
});

const loginSchema: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().email().required("Email is a required field for your login"),
  password: yup.string().required("Please, insert password to complete your login"),
});

const updateSchema: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  password: yup.string(),
  phone: yup.string(),
});

export { userSchema, loginSchema, updateSchema };
