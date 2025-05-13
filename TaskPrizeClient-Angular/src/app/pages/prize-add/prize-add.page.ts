import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { InputComponent } from 'src/app/components/input-component/input-component.component';
import { FormBoxComponent } from 'src/app/components/form-box/form-box.component';
import { TaskPrizeApiService } from 'src/app/services/task-prize-api.service';
@Component({
  selector: 'app-prize-add',
  templateUrl: './prize-add.page.html',
  styleUrls: ['./prize-add.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,InputComponent,FormBoxComponent]
})
export class PrizeAddPage {
  private navCtrl = inject(NavController);

  title:string = '';
  description:string = ''
  cost:number = 0
  

  constructor(
    private taskPrizeApiService: TaskPrizeApiService,

  ) {}

  addPrize(){
    try {
      this.taskPrizeApiService.prize_add(this.title,this.description,this.cost)
      this.navCtrl.navigateForward('/home');

    } catch (error) {
      console.log(error);
    }
    
  }

}
