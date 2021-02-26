import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransaksiPage } from '../transaksi/transaksi.page';

@Component({
  selector: 'app-detailtransaksi',
  templateUrl: './detailtransaksi.page.html',
  styleUrls: ['./detailtransaksi.page.scss'],
})
export class DetailtransaksiPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  
}
