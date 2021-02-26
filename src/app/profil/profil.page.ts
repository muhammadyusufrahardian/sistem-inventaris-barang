import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DashboardPage } from '../dashboard/dashboard.page';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  
}
