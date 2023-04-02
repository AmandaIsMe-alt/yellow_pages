import { Dispatch, SetStateAction } from "react";
import "react-toastify/dist/ReactToastify.css";

export interface IUserContext {
    updateUser: (data: IEditUser) => void;
    deleteUser: () => void;
    modal: string | null;
    setModal: Dispatch<SetStateAction<string | null>>;
}

export interface IEditUser {
    name?: string;
    email?: string;
    phone?: string;
}