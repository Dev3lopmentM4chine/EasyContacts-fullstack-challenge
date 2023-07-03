import { createContext, useEffect, useState } from "react";
import { iUpdateContact, tContact, tContactReturn } from "./interfaces";
import api from "../../services/api";
import React from "react";
import { useNavigate } from "react-router-dom";

interface tAuthProviderProps {
  children: React.ReactNode;
}

type tAuthContextProps = {
  createContact: (data: tContact) => void;
  deleteContact: (id: string) => void;
  updateContact: (data: iUpdateContact, id: string) => void;
  contacts: tContactReturn[] | [];
};

const AuthContext = createContext({} as tAuthContextProps);

const AuthProvider = ({ children }: tAuthProviderProps) => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<tContactReturn[] | []>([]);

  const token = localStorage.getItem("@EasyContactsToken");

  const listContacts = async (): Promise<void> => {
    try {
      const response = await api.get("/users/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createContact = async (data: tContact): Promise<void> => {
    try {
      const response = await api.post("/users/contacts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
      listContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (data: iUpdateContact, id: string): Promise<void> => {
    try {
      const response = await api.patch(`/users/contacts/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      listContacts()
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id: string): Promise<void> => {
    try {
      const response = await api.delete(`/users/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
      listContacts()
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      listContacts();
    } else {
      localStorage.clear();
      navigate("/login");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        createContact,
        deleteContact,
        updateContact,
        contacts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
