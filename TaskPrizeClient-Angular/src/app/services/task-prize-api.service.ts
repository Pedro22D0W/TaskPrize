import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class TaskPrizeApiService {
  
  private apiUrl = 'http://localhost:8080';

  constructor() {}

  async task_add(title: string, description: string, progress: number,payment:number,status:boolean) {
    try {
      const response = await axios.post(`${this.apiUrl}/api/tasks`,  {
        title,
        description,
        progress,
        payment,
        status
      },
        {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
              'Content-Type': 'application/json'
            }
          });
      return response.data;
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      throw error;
    }
  }
  async upDateProgress(id: any){
    const token = localStorage.getItem('auth_token');
    const response = await axios.put(`${this.apiUrl}/api/tasks/updateProgress/${id}`,{}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }
  async getUser() {
    const token = localStorage.getItem('auth_token');
    const response = await axios.get(`${this.apiUrl}/api/users/user-details`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }
  
  async getUserTasks() {
    const token = localStorage.getItem('auth_token');
    const response = await axios.get(`${this.apiUrl}/api/tasks/user-tasks`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }
}



