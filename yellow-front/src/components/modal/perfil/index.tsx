import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUser } from "../../../schemas";
import { useUser } from "../../../context/UserContext";
import { IEditUser } from "../../../interfaces/UserInterface";
import { useAuth } from "../../../context/RegisterContext";
import { Form } from "../foundation/styles";

const Perfil = () => {
  const { user } = useAuth();
  const { updateUser, deleteUser, setModal } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditUser>({ resolver: yupResolver(editUser) });

  return (
    <>
      <section className="header">
        <button onClick={() => setModal(null)}>x</button>
        <h3>Editar perfil</h3>
      </section>
      
      <Form onSubmit={handleSubmit(updateUser)}>
        <label htmlFor="name">Nome</label>
        <input id="name" {...register("name")} placeholder={user.name} />
        <span className="error-message">{errors?.name?.message}</span>

        <label htmlFor="email">Email</label>
        <input id="email" {...register("email")} placeholder={user.email} />
        <span className="error-message">{errors?.email?.message}</span>

        <label htmlFor="phone">Contato</label>
        <input id="phone" {...register("phone")} placeholder={user.phone} />
        <span className="error-message">{errors?.phone?.message}</span>

        <button type="submit" className="btnPrimary">Atualizar informações</button>
        <button className="btnError" onClick={deleteUser}>Deletar Conta</button>
      </Form>
    </>
  );
};

export default Perfil;
