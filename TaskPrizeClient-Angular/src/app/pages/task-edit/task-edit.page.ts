import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, NavController } from '@ionic/angular/standalone';
import { InputComponent } from '../../components/input-component/input-component.component';
import { SubmitButtonComponent } from '../../components/submit-button/submit-button.component';
import { FormBoxComponent } from '../../components/form-box/form-box.component';
import { IonicModule } from '@ionic/angular';
import { TaskPrizeApiService } from 'src/app/services/task-prize-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.page.html',
  styleUrls: ['./task-edit.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, InputComponent, FormBoxComponent, SubmitButtonComponent]
})
export class TaskEditPage implements OnInit {
  private navCtrl = inject(NavController);
  private router = inject(Router);
  private taskPrizeApiService = inject(TaskPrizeApiService);

  // Dados da task
  task: any = {};

  // Campos do formulário
  title: string = '';
  description: string = '';
  current_progress: number = 0;
  progress: number = 0;
  payment: number = 0;
  

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.task = nav?.extras?.state?.['task'];
    console.log(this.task)

    if (this.task) {
      // Preenche os campos com os valores atuais
      this.title = this.task.title;
      this.description = this.task.description;
      this.current_progress = this.task.current_progress;
      this.progress = this.task.progress;
      this.payment = this.task.payment;
    }
  }

  goBack() {
    this.navCtrl.navigateForward('/home');
  }

  taskEdit = async () => {
    try {
      await this.taskPrizeApiService.taskEdit(this.task.taskId, this.title,this.description,this.progress,this.current_progress,this.payment,
  
);
      this.navCtrl.navigateForward('/home');
    } catch (error) {
      console.error('Erro ao editar a task:', error);
    }
  };
}
