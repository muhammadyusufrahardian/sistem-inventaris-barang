import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginutamaPage } from '../loginutama/loginutama.page';
import { AngularFirestore} from '@angular/fire/firestore'
import { Router} from '@angular/router';
interface User{
  name: string;
  address: string;
  image: object
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

user: any = {};
userData: User;

  constructor(
    public modalController: ModalController,
    public alertController: AlertController,
    public auth: AngularFireAuth,
    public db: AngularFirestore,
    public router: Router,
    ) { }

  ngOnInit() {
  }
  async loginutama() {
    const modal = await this.modalController.create({
      component: LoginutamaPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ups!',
     
      message: 'Username/Email sudah terdaftar!',
      buttons: ['OK']
    });

    await alert.present();
  }
  loading: boolean;
  registrasi()
  {
    this.loading = true;
    this.auth
   
    .createUserWithEmailAndPassword(this.user.email, this.user.password).then(res=>{
    
this. writeuser(res.user.email);
    },err=>{
    this.presentAlert();
    this.loading = false;
    })
  }
  writeuser(email)
  {
    this.userData={
      name: this.user.fullName,
      address: '',
      image:{url:'',ref:''}
    };
this.db.collection('users').doc(email).set(this.userData).then(res=>{
  this.loading = false;
  this.router.navigate(['/loginutama'])
},err=>{
  console.log(err);
  this.presentAlert();
  this.loading = false;
})
  }
}
