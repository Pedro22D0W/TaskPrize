import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://localhost:8080/api'; // ajuste se necessário

  constructor() {}

  async signup(nome: string, email: string, senha: string) {
    try {
      const response = await axios.post(`${this.apiUrl}/cadastro`, {
        nome,
        email,
        senha,
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      throw error;
    }
  }
}
