import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DashboardPage } from '../dashboard/dashboard.page';


@Component({
  selector: 'app-laporan',
  templateUrl: './laporan.page.html',
  styleUrls: ['./laporan.page.scss'],
})
export class LaporanPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  
}
