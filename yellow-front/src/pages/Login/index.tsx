import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";

import { IUserLogin, useAuth } from "../../context/RegisterContext";
import { loginSchema } from "../../schemas";

import { Form, Section } from "../../components/formSection/style";
import Logo from "../../components/logo";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(loginSchema),
  });
  const { submitLogin } = useAuth();

  const onError = () => toast.error("Campo obrigatório!", { autoClose: 2000 });

  const onSubmit = handleSubmit(submitLogin, onError);

  return (
    <Section>
      <Logo />
      
      <Form onSubmit={onSubmit}>
        <h2 className="header">Faça o login</h2>

        <div className="content">
          <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              {...register("email")}
            />
          <span className="error-message">{errors?.email?.message}</span>

          <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Senha"
              {...register("password")}
            />
          <span className="error-message">{errors?.password?.message}</span>

          <button type="submit" className="btnPrimary">Entrar</button>

          <p className="extra">
            Ainda não tem cadastro?
            <Link to={"/"}> Cadastre-se</Link>
          </p>
        </div>
      </Form>
    </Section>
  );
};

export default Login;
