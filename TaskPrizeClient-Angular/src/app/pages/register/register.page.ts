import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { InputComponent } from 'src/app/components/input-component/input-component.component';
import { FormBoxComponent } from 'src/app/components/form-box/form-box.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [IonicModule, FormsModule, InputComponent,FormBoxComponent],
})
export class RegisterPage {
  private navCtrl = inject(NavController);
  name:string = '';
  email:string = '';
  password:string = '';
  

  constructor(
    private registerService: RegisterService,

  ) {}

  async signup() {
    try {
      const response = await this.registerService.signup(this.name, this.email, this.password);
      console.log(response);
      if (response) {
        this.navCtrl.navigateForward('/home');
      } else {
        console.log('Cadastro falhou, sem resposta válida');
      }
    } catch (error) {
      console.error('Erro ao realizar cadastro:', error);
    }
  }
}

