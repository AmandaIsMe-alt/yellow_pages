import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema } from "../../schemas";
import { IUserRegister, useAuth } from "../../context/RegisterContext";

import Input from "../../components/input";
import { Form, Section } from "../../components/formSection/style";
import Logo from "../../components/logo";

const Register = () => {
  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({ resolver: yupResolver(registerSchema) });
  const onError = () => toast.error("Preencha todos os campos");

  const onSubmit = handleSubmit(registerUser, onError);

  return (
    <Section>
      <Logo />

      <Form onSubmit={onSubmit}>
        <h2 className="header">Cadastre-se</h2>

        <div className="content">
          <Input
            type="text" id="name" label="Nome" placeholder="Informe seu nome" {...register("name")} error={errors?.name}
          />
          <Input
            type="text" id="email" label="Email" placeholder="Informe seu email" {...register("email")} error={errors?.email}
          />
          <Input
            type="password" id="password" label="Senha" placeholder="Digite sua senha" {...register("password")} error={errors?.password}
          />
          <Input
            type="password" label="Confirmar Senha" id="confirm-password" placeholder="Confirme sua senha" {...register("confirmPassword")} error={errors?.confirmPassword}
          />
          <Input
            type="text" id="phone" label="Contato" placeholder="(00) 00000-0000" {...register("phone")} error={errors?.phone}
          />

          <button type="submit" className="btnPrimary">Cadastrar</button>

          <p className="extra">
            Já possui uma conta?
            <Link to={"/login"}> Faça o login</Link>
          </p>
        </div>
      </Form>
    </Section>
  );
};

export default Register;
