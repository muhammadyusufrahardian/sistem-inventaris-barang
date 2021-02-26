import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleWriterPage } from './article-writer.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleWriterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleWriterPageRoutingModule {}
