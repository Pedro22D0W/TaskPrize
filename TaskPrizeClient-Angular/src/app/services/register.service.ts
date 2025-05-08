import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://192.168.43.175:8080';

  constructor() {}

  async signup(name: string, email: string, password: string) {
    try {
      const response = await axios.post(`${this.apiUrl}/auth/register`, {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      throw error;
    }
  }
}
