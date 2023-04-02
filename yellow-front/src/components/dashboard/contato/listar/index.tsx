import { IContact, useContacts } from "../../../../context/ContactContext";
import { useUser } from "../../../../context/UserContext";
import { Container } from "./styles";

const ListaContatos = () => {
  const { contacts, setContact } = useContacts();
  const { setModal } = useUser();

  const handleClick = (contact: IContact) => { setModal("edit"); setContact(contact); };

  return (
    <Container>
      <h3>Seus contatos</h3>
      <p>Clique no contato para editar</p>

      {contacts?.length === 0 ? (
        <p className="noResults">Sem contatos até o momento.</p>
      ) : (
        <ul className="contactList">
          {contacts?.map((contact: IContact) => (
            <li className="contactItem" key={contact.id} onClick={() => handleClick(contact)}>
              <h4>{contact.name}</h4>
              <div className="contactInfo">
                <p><b>Email:</b> {contact.email}</p>
                <p><b>Contato:</b> {contact.phone}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

    </Container>
  );
};

export default ListaContatos;
