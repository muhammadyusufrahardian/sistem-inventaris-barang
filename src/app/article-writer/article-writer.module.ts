import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule} from '@angular/common/http';
import { ArticleWriterPageRoutingModule } from './article-writer-routing.module';

import { ArticleWriterPage } from './article-writer.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleWriterPageRoutingModule,
    HttpClientModule,
    AngularEditorModule
  ],
  declarations: [ArticleWriterPage]
})
export class ArticleWriterPageModule {}
