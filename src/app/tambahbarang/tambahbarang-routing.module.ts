import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahbarangPage } from './tambahbarang.page';

const routes: Routes = [
  {
    path: '',
    component: TambahbarangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahbarangPageRoutingModule {}
