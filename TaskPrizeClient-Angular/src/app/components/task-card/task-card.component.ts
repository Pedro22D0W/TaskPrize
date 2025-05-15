import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TaskPrizeApiService } from 'src/app/services/task-prize-api.service';

@Component({
  selector: 'app-task-card',
  imports: [IonicModule],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {

@Input() task: any;
@Output() progressUpdated = new EventEmitter<number>();
@Output() taskDeleted = new EventEmitter<number>();
@Input() onClick!: (taskId: number) => Promise<void> | void;

handleClick() {
    this.progressUpdated.emit(this.task.taskId);  // 👈 Emite o ID
  }

  deleteTask() {
    if (this.task?.taskId) {
      this.taskDeleted.emit(this.task.taskId);
    }
  }

  private taskPrizeApi = inject(TaskPrizeApiService)
  constructor() { }

 
}
