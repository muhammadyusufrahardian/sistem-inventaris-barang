import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
@Component({
  selector: 'app-loginutama',
  templateUrl: './loginutama.page.html',
  styleUrls: ['./loginutama.page.scss'],
})
export class LoginutamaPage implements OnInit {
  [x: string]: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  
}
