import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContactRequest, IContactUpdate } from "../interfaces/contact";

const contactSchema: SchemaOf<IContactRequest> = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup.string().email().required("Email is a required field"),
  phone: yup.string().required("phone number is a required field"),
});

const updateSchema: SchemaOf<IContactUpdate> = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  phone: yup.string(),
});

export { contactSchema, updateSchema };
