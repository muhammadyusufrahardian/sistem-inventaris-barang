import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TambahbarangPage } from './tambahbarang.page';

describe('TambahbarangPage', () => {
  let component: TambahbarangPage;
  let fixture: ComponentFixture<TambahbarangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahbarangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TambahbarangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
