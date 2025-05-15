import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { TaskPrizeApiService } from 'src/app/services/task-prize-api.service';

@Component({
  selector: 'app-task-card',
  imports: [IonicModule],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {

@Input() task: any;
private navCtrl = inject(NavController);
@Output() progressUpdated = new EventEmitter<number>();
@Output() taskDeleted = new EventEmitter<number>();


handleClick() {
    this.progressUpdated.emit(this.task.taskId);
  }

  deleteTask() {
    if (this.task?.taskId) {
      this.taskDeleted.emit(this.task.taskId);
    }
  }
  editTask(task: any) {
  this.navCtrl.navigateForward('task-edit', {
    state: { task }
  });
}

  private taskPrizeApi = inject(TaskPrizeApiService)
  constructor() { }

 
}
