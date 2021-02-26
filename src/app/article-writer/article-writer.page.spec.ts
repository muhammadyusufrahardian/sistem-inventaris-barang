import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArticleWriterPage } from './article-writer.page';

describe('ArticleWriterPage', () => {
  let component: ArticleWriterPage;
  let fixture: ComponentFixture<ArticleWriterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleWriterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleWriterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
