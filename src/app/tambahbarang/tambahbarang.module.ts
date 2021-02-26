import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahbarangPageRoutingModule } from './tambahbarang-routing.module';

import { TambahbarangPage } from './tambahbarang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahbarangPageRoutingModule
  ],
  declarations: [TambahbarangPage]
})
export class TambahbarangPageModule {}
