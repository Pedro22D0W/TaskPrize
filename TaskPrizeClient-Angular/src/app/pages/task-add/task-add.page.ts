import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { InputComponent } from 'src/app/components/input-component/input-component.component';
import { FormBoxComponent } from 'src/app/components/form-box/form-box.component';
import { TaskPrizeApiService } from 'src/app/services/task-prize-api.service';
@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.page.html',
  styleUrls: ['./task-add.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,InputComponent,FormBoxComponent]
})
export class TaskAddPage {
  private navCtrl = inject(NavController);

  title:string = '';
  description:string = ''
  progress:number = 0
  payment:number = 0
  status:boolean = false

  constructor(
    private taskPrizeApiService: TaskPrizeApiService,

  ) {}

  addTask(){
    try {
      this.taskPrizeApiService.task_add(this.title,this.description,this.progress,this.payment,this.status)
      this.navCtrl.navigateForward('/home');

    } catch (error) {
      console.log(error);
    }
    
  }

}
