import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginutamaPageRoutingModule } from './loginutama-routing.module';

import { LoginutamaPage } from './loginutama.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginutamaPageRoutingModule
  ],
  declarations: [LoginutamaPage]
})
export class LoginutamaPageModule {}
