import { useAuth } from "../../../context/RegisterContext";
import { useUser } from "../../../context/UserContext";
import { Aside } from "./styles";

const Perfil = () => {

  const { logout, user } = useAuth();
  const { setModal } = useUser();

  return (
    <Aside>
      <div className="sidebar">
        <h2>Olá, {user?.name}!</h2>
        <strong>Seus dados:</strong>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>

        <div className="btnGroup">
          <button className="btnPrimary" onClick={() => setModal("user")}> Editar Perfil</button>
          <button className="btnError" onClick={() => logout()}> Sair</button>
        </div>
      </div>
    </Aside>
  );
};

export default Perfil;
