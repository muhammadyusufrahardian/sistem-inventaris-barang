import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { LoginPage } from '../login/login.page';

import { AngularFireAuth } from '@angular/fire/auth';
import {Router } from '@angular/router';
import { AboutPage } from '../about/about.page';
import { ProfilPage } from '../profil/profil.page';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private menu: MenuController,
    public modalController: ModalController,
    public auth: AngularFireAuth,
    public router: Router
    ) { }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  ngOnInit() {
  }
  email: any;
  password: any;

  selectedSegment:any = 'login';

  
  async login() {
    const modal = await this.modalController.create({
      component: LoginPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  
  
  logout(){
    this.auth

    .signOut()
    .then(value =>{
      this.router.navigate(['/login']);
    });
  }
  async about() {
    const modal = await this.modalController.create({
      component: AboutPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async profil() {
    const modal = await this.modalController.create({
      component: ProfilPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
