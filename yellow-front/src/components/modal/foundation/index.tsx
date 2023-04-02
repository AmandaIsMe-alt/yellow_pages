import { useUser } from "../../../context/UserContext";
import Perfil from "../perfil";
import Contato from "../contato";

import { Container } from "./styles";

const Modal = () => {
  const { modal } = useUser();

  return (
    <Container>
      <div className="modal">
        {modal === "user" ? <Perfil /> : <Contato />}
      </div>
    </Container>
  );
};

export default Modal;
