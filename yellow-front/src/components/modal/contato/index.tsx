import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { IEditContact, useContacts } from "../../../context/ContactContext";
import { useUser } from "../../../context/UserContext";
import { editUser } from "../../../schemas";

import { Form } from "../foundation/styles";

const Contato = () => {
  const { contact, deleteContact, editContact } = useContacts();
  const { setModal } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditContact>({
    resolver: yupResolver(editUser),
  });

  return (
    <>
      <section className="header">
        <button onClick={() => setModal(null)}>x</button>
        <h3>Editar contato</h3>
      </section>

      <Form onSubmit={handleSubmit(editContact)}>
        <label htmlFor="name">Nome</label>
        <input id="name" placeholder={contact.name} {...register("name")} />
        <br/>

        <label htmlFor="email">Email</label>
        <input id="email" placeholder={contact.email} type="email" {...register("email")}/>
        <br/>

        <label>Contato</label>
        <input id="phone" placeholder={contact.phone} {...register("phone")} />
        <br/>

        <button type="submit" className="btnPrimary">Salvar Alterações</button>
        <button className="btnError" onClick={() => deleteContact(contact.id)}>Excluir Contato</button>
      </Form>
    </>
  );
};

export default Contato;
