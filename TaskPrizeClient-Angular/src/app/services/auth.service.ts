import { Injectable, signal } from '@angular/core';
import axios from 'axios';

const API_URL = 'http://seu-backend.com/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = signal<string | null>(null);

  constructor() {
    // Carregar token do localStorage, se existir
    const savedToken = localStorage.getItem('auth_token');
    if (savedToken) {
      this.token.set(savedToken);
    }
  }

  async login(email: string, senha: string): Promise<{ token: string | null }> {
    try {
      const response = await axios.post<{ token: string }>(`${API_URL}/login`, {
        email,
        senha
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return { token: null };
    }
  }
  // Armazena o token como um Signal (reativo)
  setToken(newToken: string) {
    this.token.set(newToken);
    localStorage.setItem('auth_token', newToken); // persiste entre sessões
  }

  clearToken() {
    this.token.set(null);
    localStorage.removeItem('auth_token');
  }
}
