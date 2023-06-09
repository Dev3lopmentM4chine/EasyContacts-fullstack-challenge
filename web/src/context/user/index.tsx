import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tLogin, tUser } from "./interfaces";
import api from "../../services/api";

interface tUserProviderProps {
  children: React.ReactNode;
}

type tUserContextProps = {
  login: (data: tLogin) => void;
  register: (data: tUser) => void;
};

const UserContext = createContext({} as tUserContextProps);

const UserProvider = ({ children }: tUserProviderProps) => {
  const navigate = useNavigate();

  const login = async (data: tLogin): Promise<void> => {
    try {
      const response = await api.post("/login", data);
      localStorage.setItem("@EasyContactsToken", response.data.token)
      navigate("/home")
    } catch (error) {
      console.log(error);
      //Toast com mensagem de erro
    }
  };

  const register = async (data: tUser): Promise<void> => {
    try {
      await api.post("/users", data);
      //Toast com mensagem de sucesso
      navigate("/login")
    } catch (error) {
      console.log(error);
      //Toast com mensagem de erro
    }
  };

  return (
    <UserContext.Provider value={{ login, register }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
