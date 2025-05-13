import { useAuth } from "@/context/AuthContext";
import axios from "axios";

const BASE_URL = "http://192.168.0.12:8080";

const cadastro = async (name : string, email:string, password:string) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/register`,
      {
        name,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Cadastro realizado com sucesso:", response.data);
    return response;
  } catch (error) {
    console.error("Erro ao realizar cadastro:", error);
  }
};

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("login realizado com sucesso:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao realizar cadastro:", error);
  }
};

export { cadastro, login };