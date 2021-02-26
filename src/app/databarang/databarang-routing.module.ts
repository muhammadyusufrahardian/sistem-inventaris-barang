import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatabarangPage } from './databarang.page';

const routes: Routes = [
  {
    path: '',
    component: DatabarangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatabarangPageRoutingModule {}
