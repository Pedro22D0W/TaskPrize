import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, NavController } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { PrizeCardComponent } from 'src/app/components/prize-card/prize-card.component';
import { TaskPrizeApiService } from 'src/app/services/task-prize-api.service';
import { AddButtonComponent } from "../../components/add-button/add-button.component";
import { BalanceBoxComponent } from "../../components/balance-box/balance-box.component";

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.page.html',
  styleUrls: ['./prizes.page.scss'],
  standalone: true,
  imports: [IonicModule, PrizeCardComponent, CommonModule, AddButtonComponent, BalanceBoxComponent]
})
export class PrizesPage {

user:any;
prizes: any[] = [];
private navCtrl = inject(NavController);
private taskPrizeApi = inject(TaskPrizeApiService)

 goBack(){
    this.navCtrl.navigateForward('home');
  }
 addPrize = () => {
    this.navCtrl.navigateForward('prize-add');
  }

  constructor() { }

  async ionViewWillEnter() {
    try {
      this.user = await this.taskPrizeApi.getUser();
      this.prizes = await this.taskPrizeApi.getPrizes();
      console.log(this.user)

      console.log('Usuário e tasks:', this.user,this.prizes);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
    }
  }
  async deletePrize(prize_id: number) {
    try {
      await this.taskPrizeApi.deletePrize(prize_id);
      this.prizes = this.prizes.filter(t => t.prize_id !== prize_id);
    } catch (error) {
      console.error('Erro ao deletar task:', error);
    }
  }
  rescuePrize(prize:any) {
    try {
      this.taskPrizeApi.rescuePrize(prize.prize_id)
     
      if (this.user.balance >= prize.cost) {
        this.user.balance = this.user.balance - prize.cost
        this.prizes = this.prizes.filter(p => p.prize_id !== prize.prize_id);
        
      }
      
    
    } catch (error) {
      
    }
}

}
