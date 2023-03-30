export interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export interface IContactRequest {
  name: string;
  email: string;
  phone: string;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  phone?: string;
}
