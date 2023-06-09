import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tLogin, tUser } from "./interfaces";
import api from "../../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

interface tUserProviderProps {
  children: React.ReactNode;
}

type tUserContextProps = {
  login: (data: tLogin) => void;
  signup: (data: tUser) => void;
  logout: () => void;
};

const UserContext = createContext({} as tUserContextProps);

const UserProvider = ({ children }: tUserProviderProps) => {
  const navigate = useNavigate();

  const login = async (data: tLogin): Promise<void> => {
    try {
      const response = await api.post("/login", data);
      localStorage.setItem("@EasyContactsToken", response.data.token);
      navigate("/home");
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      } else {
        toast.error("Erro desconhecido!");
      }
    }
  };

  const signup = async (data: tUser): Promise<void> => {
    try {
      await api.post("/users", data);
      toast.success("Account created!");
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      } else {
        toast.error("Erro desconhecido!");
      }
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
