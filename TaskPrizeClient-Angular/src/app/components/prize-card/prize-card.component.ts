import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { TaskPrizeApiService } from 'src/app/services/task-prize-api.service';


@Component({
  selector: 'app-prize-card',
  templateUrl: './prize-card.component.html',
  styleUrls: ['./prize-card.component.scss'],
  imports:[IonicModule]
})
export class PrizeCardComponent {
@Input() prize: any;
private navCtrl = inject(NavController);
@Output() prizeDeleted = new EventEmitter<number>();
@Output() prizeEdited = new EventEmitter<number>();
@Output() prizeRescue = new EventEmitter<number>();
private taskPrizeApi = inject(TaskPrizeApiService)

rescuePrize(prize:any) {
  //this.taskPrizeApi.rescuePrize(this.prize.prize_id)
  this.prizeRescue.emit(this.prize.prize_id);
}
deletePrize() {
    if (this.prize?.prize_id) {
      this.prizeDeleted.emit(this.prize.prize_id);
    }
  }
 editPrize(prize: any) {
  this.navCtrl.navigateForward('prize-edit', {
    state: { prize }
  });
}

}
