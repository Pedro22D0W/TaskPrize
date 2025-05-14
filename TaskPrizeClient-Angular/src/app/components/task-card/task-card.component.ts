import { Component, inject, Input, OnInit } from '@angular/core';
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
@Input() onClick!: (taskId: number) => Promise<void> | void;

oniClick(i:number){
  console.log(this.task)
}

  private taskPrizeApi = inject(TaskPrizeApiService)
  constructor() { }

 
}
