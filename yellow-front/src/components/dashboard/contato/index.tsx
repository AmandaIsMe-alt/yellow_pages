import AdicionarContato from "./adicionar";
import ListaContatos from "./listar";

const Contato = () => {

  return (
    <>
        <section className="contatoContainer">
            <AdicionarContato/>
            <ListaContatos/>
        </section>
    </>
  );
};

export default Contato;
