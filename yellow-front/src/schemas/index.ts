import * as yup from "yup";

export const registerSchema = yup.object().shape({

  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Por favor, digite um email válido."),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches( /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
    "Senha deve conter 8 letras, uma maiúscula, uma minúscula, um número e um caracter especial"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  phone: yup.string().required("Preencha os campos corretamente"),
});

export const loginSchema = yup.object().shape({

  email: yup.string().required("E-mail obrigatório").email("E-mail inválido ou já esta sendo utilizado."),
  password: yup.string().required("Senha obrigatória"),
});

export const registerContact = yup.object().shape({

  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido ou já esta sendo utilizado"),
  phone: yup.string().required("Contato obrigatório"),
});

export const editUser = yup.object().shape({
  
  name: yup.string(),
  email: yup.string(),
  phone: yup.string(),
});


