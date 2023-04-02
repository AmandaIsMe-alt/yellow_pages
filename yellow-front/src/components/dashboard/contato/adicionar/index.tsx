import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { INewContact, useContacts } from "../../../../context/ContactContext";
import { registerContact } from "../../../../schemas";
import { Container, Form } from "./styles";

const AdicionarContato = () => {
  const { newContact } = useContacts();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewContact>({ resolver: yupResolver(registerContact) });

  const onError = () => toast.error("Preencha todos os campos");
  const onSubmit = handleSubmit(newContact, onError);

  return (
    <Container>
        <h3>Adicione contatos</h3>
      <Form onSubmit={onSubmit}>
        <div className="content">
            <div>
                <label className="name">Nome</label>
                <input
                    type="text"
                    placeholder="Nome do contato"
                    {...register("name")}
                />
                <span className="error-message">{errors?.name?.message}</span>
            </div>

            <div>
                <label className="email">Email</label>
                <input
                    type="text"
                    placeholder="Email do contato"
                    {...register("email")}
                />
                <span className="error-message">{errors?.email?.message}</span>
            </div>

            <div>
                <label className="phone">Contato</label>
                <input
                    type="text"
                    placeholder="(00) 00000-0000"
                    {...register("phone")}
                />
                <span className="error-message">{errors?.phone?.message}</span>
            </div>
        </div>

        <button type="submit" className="btnPrimary">Adicionar</button>
      </Form>
    </Container>
  );
};

export default AdicionarContato;
