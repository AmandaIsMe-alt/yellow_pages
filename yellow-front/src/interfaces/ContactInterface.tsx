import { Dispatch, ReactNode, SetStateAction } from "react";

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

export interface IContact {
    id: string;
    name: string;
    email: string;
    phone: string;
}

export interface INewContact {
    name: string;
    email: string;
    phone: string;
}

export interface IEditContact {
    name?: string;
    email?: string;
    phone?: string;
}

export interface IDeleteContact {
    id: string;
    contact: string;
}