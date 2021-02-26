import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  constructor(
    public auth: AngularFireAuth,
    private toast:ToastController,
    public toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }
  userAuth:any;
  ionViewDidEnter() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.userAuth = user;
      }
    })
}
async pesanKesalahan() {
  const toast = await this.toastController.create({
    message: 'Your settings have been saved.',
    duration: 2000,
    position:'middle'
  });
  toast.present();
}
email:any;
  loading:boolean;
  forgot()
  {
    this.loading=true;
    this.auth

    .sendPasswordResetEmail(this.email).then(res=>{
      this.loading=false;
      this.presentToast('Tautan untuk pembaruan kata sandi berhasil terkirim melalui email Anda');
      this.router.navigate(['/login']);
    }).catch(error=>{
      this.pesanKesalahan();
    })
  }

  async presentToast(msg) {
    const toast = await this.toast.create({     
      message: msg,
      position: 'middle',
      duration:3000
    });
    toast.present();
  }

}
