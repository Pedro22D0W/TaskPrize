import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormBoxComponent } from "../components/form-box/form-box.component";
import { TaskCardComponent } from "../components/task-card/task-card.component";
import { TaskPrizeApiService } from '../services/task-prize-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, TaskCardComponent],
})
export class HomePage implements OnInit {

  
  private auth = inject(AuthService);
  private navCtrl = inject(NavController);
  private taskPrizeApi = inject(TaskPrizeApiService)
  user:any;
  tasks: any[] = [];

  async ngOnInit() {
    try {
      this.user = await this.taskPrizeApi.getUser();
      this.tasks = await this.taskPrizeApi.getUserTasks();
      console.log(this.user)

      console.log('Usuário e tasks:', this.user,this.tasks);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
    }
  }
  constructor() {
    console.log(localStorage.getItem("auth_token"))
    //if (!localStorage.getItem("auth_token")) {
   // this.navCtrl.navigateForward('/login');
   // }
  }

  addTask(){
    this.navCtrl.navigateForward('task-add');
  }
  goShop(){
    this.navCtrl.navigateForward('prizes');
  }
}
