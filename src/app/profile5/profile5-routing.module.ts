import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profile5Page } from './profile5.page';

const routes: Routes = [
  {
    path: '',
    component: Profile5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profile5PageRoutingModule {}
