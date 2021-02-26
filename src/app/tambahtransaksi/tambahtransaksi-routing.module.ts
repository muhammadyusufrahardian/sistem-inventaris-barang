import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahtransaksiPage } from './tambahtransaksi.page';

const routes: Routes = [
  {
    path: '',
    component: TambahtransaksiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahtransaksiPageRoutingModule {}
