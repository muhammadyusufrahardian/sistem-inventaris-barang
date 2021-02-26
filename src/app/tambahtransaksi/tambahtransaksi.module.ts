import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahtransaksiPageRoutingModule } from './tambahtransaksi-routing.module';

import { TambahtransaksiPage } from './tambahtransaksi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahtransaksiPageRoutingModule
  ],
  declarations: [TambahtransaksiPage]
})
export class TambahtransaksiPageModule {}
