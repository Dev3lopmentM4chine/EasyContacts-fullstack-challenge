import { createContext, useEffect, useState } from "react";
import {
  iUpdateContact,
  iUpdateUser,
  tContact,
  tContactReturn,
  tUserReturn,
} from "./interfaces";
import api from "../../services/api";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface tAuthProviderProps {
  children: React.ReactNode;
}

type tAuthContextProps = {
  createContact: (data: tContact) => void;
  deleteContact: (id: string) => void;
  updateContact: (data: iUpdateContact, id: string) => void;
  contacts: tContactReturn[] | [];
  deleteProfile: (id: string) => void;
  updateProfile: (data: iUpdateContact, id: string) => void;
  userLogged: tUserReturn | null;
};

const AuthContext = createContext({} as tAuthContextProps);

const AuthProvider = ({ children }: tAuthProviderProps) => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<tContactReturn[] | []>([]);
  const [userLogged, setUserLogged] = useState<tUserReturn | null>(null);

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

  const getUserLoggedInfo = async (): Promise<void> => {
    try {
      const response = await api.get("/users/loggedInfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status == 200) {
        setUserLogged(response.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error!");
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

  const updateContact = async (
    data: iUpdateContact,
    id: string
  ): Promise<void> => {
    try {
      await api.patch(`/users/contacts/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      listContacts();
      toast.success("Contact added!");
    } catch (error) {
      console.log(error);
      toast.error("Error!");
    }
  }; // Esta funcionando mais esta caindo no catch

  const deleteContact = async (id: string): Promise<void> => {
    try {
      await api.delete(`/users/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Contact deleted!");
      listContacts();
    } catch (error) {
      console.log(error);
      toast.success("Error!");
    }
  };

  const deleteProfile = async (id: string): Promise<void> => {
    try {
      const response = await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const updateProfile = async (
    data: iUpdateUser,
    id: string
  ): Promise<void> => {
    try {
      await api.patch(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      getUserLoggedInfo();
      toast.success("Profile updated!");
    } catch (error) {
      console.log(error);
      toast.error("Error!");
    }
  };

  useEffect(() => {
    if (token) {
      listContacts();
      getUserLoggedInfo();
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
        deleteProfile,
        updateProfile,
        userLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
