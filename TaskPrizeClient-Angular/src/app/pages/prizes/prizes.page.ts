import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, NavController } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { PrizeCardComponent } from 'src/app/components/prize-card/prize-card.component';
import { TaskPrizeApiService } from 'src/app/services/task-prize-api.service';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.page.html',
  styleUrls: ['./prizes.page.scss'],
  standalone: true,
  imports: [IonicModule,PrizeCardComponent, CommonModule]
})
export class PrizesPage implements OnInit {

user:any;
prizes: any[] = [];
private navCtrl = inject(NavController);
private taskPrizeApi = inject(TaskPrizeApiService)
resgatarPrize(_t14: any) {
throw new Error('Method not implemented.');
}
goBack() {
throw new Error('Method not implemented.');
}
addPrize() {
  console.log("navegou") // ou outra rota que você usar
}

  constructor() { }

  async ngOnInit() {
    try {
      this.user = await this.taskPrizeApi.getUser();
      this.prizes = await this.taskPrizeApi.getPrizes();
      console.log(this.user)

      console.log('Usuário e tasks:', this.user,this.prizes);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
    }
  }

}
