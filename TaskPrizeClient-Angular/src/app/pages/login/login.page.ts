import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { InputComponent } from 'src/app/components/input-component/input-component.component';
import { FormBoxComponent } from 'src/app/components/form-box/form-box.component';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, FormsModule, CommonModule,InputComponent,FormBoxComponent],
})
export class LoginPage {
  private auth = inject(AuthService);
  private navCtrl = inject(NavController);

  email: string = '';
  senha: string = '';

  constructor() {}

  async sign() {
    this.auth.login(this.email, this.senha).then(response => {
      if (response.token) {
        this.auth.setToken(response.token);
        console.log(this.auth.token)
        this.navCtrl.navigateForward('/home');
      } else {
        console.log("erro");
      }
    });
  }

  signup() {
    this.navCtrl.navigateForward('/register');
  }
}
