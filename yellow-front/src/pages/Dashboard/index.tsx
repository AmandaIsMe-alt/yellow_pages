import { useUser } from "../../context/UserContext";

import Container from "./styles";
import Header from "../../components/dashboard/header";
import Perfil from "../../components/dashboard/perfil";
import Contato from "../../components/dashboard/contato";
import Modal from "../../components/modal/foundation";

const Dashboard = () => {
  const { modal } = useUser();

  return (
    <>
      <Container>
        <Header/>

        {modal && <Modal />}

        <div className="content">
          <Perfil />
          <Contato/>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
