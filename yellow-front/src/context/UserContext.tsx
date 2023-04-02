import { useContext, createContext, useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IAuthProviderProps } from "../interfaces/RegisterInterface";
import { useAuth } from "./RegisterContext";

import { IUserContext, IEditUser } from "../interfaces/UserInterface";

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IAuthProviderProps) => {
  const [modal, setModal] = useState<string | null>(null);
  const { user, setUser } = useAuth();
  const token = localStorage.getItem("@fullstack:token");

  const navigate = useNavigate();

  async function loadUser(token: string) {
    try {
      const response = await api.get(`/users/owner`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (token) {
      loadUser(token);
    } else {
      navigate("/login");
    }
  }, [token]);

  const updateUser = (data: IEditUser) => {
    api
      .patch("/users/owner", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setModal(null);
        loadUser(token!);

        toast.success("Perfil atualizado com sucesso!", {
          pauseOnHover: false,
          autoClose: 2000,
        });
      })
      .catch((error) => {
        toast.error("Ocorreu um erro ao editar seu perfil.", {
          pauseOnHover: false,
          autoClose: 2000,
        });
        console.log(error);
      });
  };

  const deleteUser = () => {
    api
      .delete("/users/owner", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setModal(null);
        toast.success("Conta deletada com sucesso!", {
          pauseOnHover: false,
          autoClose: 2000,
        });
        localStorage.clear();
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        console.log(error);

        toast.error("Ops! Algo deu errado!", {
          pauseOnHover: false,
          autoClose: 2000,
        });
      });
  };

  return (
    <UserContext.Provider value={{ updateUser, deleteUser, modal, setModal }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);

  return context;
}

export default UserProvider;
