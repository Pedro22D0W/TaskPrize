import { useAuth } from "@/context/AuthContext";
import axios from "axios";

const BASE_URL = "http://localhost:8080";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para adicionar o token atualizado antes de cada requisição
api.interceptors.request.use(
  (config) => {
    const { token } = useAuth(); // Obtém o token do contexto
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const cadastro = async (nome: string, email: string, senha: string) => {
  try {
    const response = await api.post("/cadastro", 
      { nome, email, senha }, 
      { headers: { "Content-Type": "application/json", }, 
    });
    return "";
  } catch (error) {

  }
};
const login = async (email: string, senha: string) => {
  try {
    const response = await api.post("/login", 
     { email, senha }, 
      { headers: { "Content-Type": "application/json", }, 
    });
    return response;
 } catch (error) {
  }
  return "token"
};

export { api, cadastro, login };