import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatabarangPageRoutingModule } from './databarang-routing.module';

import { DatabarangPage } from './databarang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatabarangPageRoutingModule
  ],
  declarations: [DatabarangPage]
})
export class DatabarangPageModule {}
