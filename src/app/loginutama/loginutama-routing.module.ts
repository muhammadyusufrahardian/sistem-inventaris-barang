import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginutamaPage } from './loginutama.page';

const routes: Routes = [
  {
    path: '',
    component: LoginutamaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginutamaPageRoutingModule {}
