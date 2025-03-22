import axios from "axios";

const token = sessionStorage.getItem('token');
const BASE_URL = "http://localhost:8080";
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
  });

const cadastro = async (nome: string, email: string, senha: string) => {
    try {
        const response = await api.post("/cadastro",{nome,email,senha},{headers: {"Content-Type": "application/json",},});
      } catch (error) {

      }
    };
    const login = async (email: string, senha: string) => {
        try {
            const response = await api.post("/login",{email,senha},{headers: {"Content-Type": "application/json",},});
          } catch (error) {
    
          }
        };