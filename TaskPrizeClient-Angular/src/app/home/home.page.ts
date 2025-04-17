import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';
import {NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  private auth = inject(AuthService);
  private navCtrl = inject(NavController);
  constructor() {
    console.log(localStorage.getItem("auth_token"))
    if (!localStorage.getItem("auth_token")) {
    this.navCtrl.navigateForward('/login');
    }
  }
}
