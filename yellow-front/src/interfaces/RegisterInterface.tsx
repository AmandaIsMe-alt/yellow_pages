import { ReactNode} from "react";
import React from "react";

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  contacts: [];
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IAuthContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  registerUser: (data: IUserRegister) => void;
  submitLogin: (data: IUserLogin) => void;
  logout: () => void;
}