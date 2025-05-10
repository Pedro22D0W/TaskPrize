import { Component, inject, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TaskPrizeApiService } from 'src/app/services/task-prize-api.service';


@Component({
  selector: 'app-prize-card',
  templateUrl: './prize-card.component.html',
  styleUrls: ['./prize-card.component.scss'],
  imports:[IonicModule]
})
export class PrizeCardComponent {
@Input() prize: any;
private taskPrizeApi = inject(TaskPrizeApiService)

rescuePrize() {
  this.taskPrizeApi.rescuePrize(this.prize.prize_id)
}
}
