import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { LoginutamaPage } from '../loginutama/loginutama.page';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public router: Router,
    public modalController: ModalController,
    public auth: AngularFireAuth,
    public alertController: AlertController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  email:any;
  password:any;
  loading: boolean;
  masuk(){
    this.auth.signInWithEmailAndPassword(this.email, this.password)
    .then(value => {
     this.router.navigate(['/dashboard']);
    })
    .catch(err => {
      this.presentAlert()
    });
  }
  selectedSegment:any = 'login';

  
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ups!',
     
      message: 'Password/Username tidak terdaftar!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async back() {
    const modal = await this.modalCtrl.create({
      component: LoginutamaPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
