import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, NavController } from '@ionic/angular/standalone';
import { InputComponent } from "../../components/input-component/input-component.component";
import { SubmitButtonComponent } from "../../components/submit-button/submit-button.component";
import { FormBoxComponent } from "../../components/form-box/form-box.component";
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { TaskPrizeApiService } from 'src/app/services/task-prize-api.service';

@Component({
  selector: 'app-prize-edit',
  templateUrl: './prize-edit.page.html',
  styleUrls: ['./prize-edit.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, InputComponent, FormBoxComponent, SubmitButtonComponent]
})
export class PrizeEditPage implements OnInit {

   private navCtrl = inject(NavController);
  private router = inject(Router);
  private taskPrizeApiService = inject(TaskPrizeApiService);

  
  prize: any = {};

  // Campos do formulário
  title: string = '';
  description: string = '';
  cost: number = 0;
  
  

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.prize = nav?.extras?.state?.['prize'];
    console.log(this.prize)

    if (this.prize) {
     
      this.title = this.prize.title;
      this.description = this.prize.description;
      this.cost = this.prize.cost;
    }
  }

  goBack() {
    this.navCtrl.navigateForward('/prizes');
  }

  prizeEdit = async () => {
    try {
      await this.taskPrizeApiService.prizeEdit(this.prize.prize_id, this.title,this.description,this.cost);
      this.navCtrl.navigateForward('/prizes');
    } catch (error) {
      console.error('Erro ao editar a task:', error);
    }
  };

}
