import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from "../components/task-card/task-card.component";
import { TaskPrizeApiService } from '../services/task-prize-api.service';
import { BalanceBoxComponent } from '../components/balance-box/balance-box.component';
import { AddButtonComponent } from '../components/add-button/add-button.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, TaskCardComponent,BalanceBoxComponent,AddButtonComponent],
})
export class HomePage  {

  
  private auth = inject(AuthService);
  private navCtrl = inject(NavController);
  private taskPrizeApi = inject(TaskPrizeApiService)
  user:any;
  tasks: any[] = [];

  async ionViewWillEnter() {
    try {
      this.user = await this.taskPrizeApi.getUser();
      this.tasks = await this.taskPrizeApi.getUserTasks();
      console.log(this.user)

      console.log('Usuário e tasks:', this.user,this.tasks);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
    }
  }
  constructor() {}

  addTask = () => {
    this.navCtrl.navigateForward('task-add');
  };
  goShop(){
    this.navCtrl.navigateForward('prizes');
  }
  
  regProgress = async (taskId: number) => {
  try {
    const updatedTask = await this.taskPrizeApi.upDateProgress(taskId);

    if (updatedTask) {
      this.tasks = this.tasks.map(task =>
        task.taskId === updatedTask.taskId
          ? { ...task, current_progress: updatedTask.current_progress, status: updatedTask.status }
          : task
      );

      if (updatedTask.status === true) {
        this.user.balance += updatedTask.payment;
        this.tasks = this.tasks.filter(t => t.taskId !== updatedTask.taskId);
      }
    }
  } catch (error) {
    console.error('Erro ao atualizar progresso:', error);
  }
};

  async deleteTask(taskId: number) {
    try {
      await this.taskPrizeApi.deleteTask(taskId);
      this.tasks = this.tasks.filter(t => t.taskId !== taskId);
    } catch (error) {
      console.error('Erro ao deletar task:', error);
    }
  }
}
