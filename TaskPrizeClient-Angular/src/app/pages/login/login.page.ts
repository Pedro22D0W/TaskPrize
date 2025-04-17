import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service'; // serviço que guarda o token

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, FormsModule, CommonModule],
})
export class LoginPage {
  private auth = inject(AuthService);
  private navCtrl = inject(NavController);

  email: string = '';
  senha: string = '';

  constructor() {
    // Reagir quando o token for atualizado
    effect(() => {
      const token = this.auth.token();
      console.log('Token atualizado no contexto:', token);
      if (token) {
        this.navCtrl.navigateForward('/home');
        
      }
    });
  }

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
