import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginutamaPage } from './loginutama.page';

describe('LoginutamaPage', () => {
  let component: LoginutamaPage;
  let fixture: ComponentFixture<LoginutamaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginutamaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginutamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
