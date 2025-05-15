import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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
@Output() prizeDeleted = new EventEmitter<number>();
private taskPrizeApi = inject(TaskPrizeApiService)

rescuePrize() {
  this.taskPrizeApi.rescuePrize(this.prize.prize_id)
}
deletePrize() {
    if (this.prize?.prize_id) {
      this.prizeDeleted.emit(this.prize.prize_id);
    }
  }
editPrize() {
    if (this.prize?.taskId) {
      this.prizeDeleted.emit(this.prize.prize_id);
    }
  }

}
