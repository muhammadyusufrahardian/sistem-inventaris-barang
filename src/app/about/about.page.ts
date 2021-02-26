import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DashboardPage } from '../dashboard/dashboard.page';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  

}
