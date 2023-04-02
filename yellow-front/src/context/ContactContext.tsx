import { Dispatch, ReactNode, SetStateAction, useContext, useEffect,} from "react";
import { createContext, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

import { IContact, INewContact, IEditContact } from "../interfaces/ContactInterface";

export interface IContactProviderProps {
  children: ReactNode;
}

export interface IContactContext {
  contacts: IContact[];
  setContacts: Dispatch<SetStateAction<IContact[]>>;
  contact: IContact;
  setContact: Dispatch<SetStateAction<IContact>>;
  loadContacts: (token: string) => void;
  newContact: (data: INewContact) => void;
  deleteContact: (id: string) => void;
  editContact: (data: IEditContact) => void;
}

export const ContactsContext = createContext<IContactContext>(
  {} as IContactContext
);

const ContactProvider = ({ children }: IContactProviderProps) => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [contact, setContact] = useState<IContact>({} as IContact);
  const { setModal } = useUser();
  const token = localStorage.getItem("@fullstack:token");

  const navigate = useNavigate();

  async function loadContacts(token: string) {
    try {
      const response = await api.get(`/contacts/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (token) {
      loadContacts(token);
    } else {
      navigate("/login");
    }
  }, [token]);

  function newContact(data: INewContact) {
    api
      .post(`/contacts/`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setContacts((oldList) => [res.data, ...oldList]);
        loadContacts(token!);
        toast.success("Contato criado com sucesso!", {
          pauseOnHover: false,
        });
      })
      .catch((error) => console.log(error));
  }

  function editContact(data: IEditContact) {
    api
      .patch(`/contacts/${contact?.id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        loadContacts(token!);
        setModal(null);

        toast.success("Alteração salva com sucesso!", {
          pauseOnHover: false,
        });
      })
      .catch((error) => console.log(error));
  }

  function deleteContact(id: string) {
    api
      .delete(`/contacts/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const newContactList = contacts.filter((contact) => contact.id !== id);
        setContacts(newContactList);
        toast.success("Contato deletado com sucesso!", {
          pauseOnHover: false,
        });
        setModal(null);
      })
      .catch((error) => console.log(error));
  }

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        setContacts,
        contact,
        setContact,
        loadContacts,
        newContact,
        deleteContact,
        editContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => {
  return useContext(ContactsContext);
};

export default ContactProvider;
