import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TambahtransaksiPage } from './tambahtransaksi.page';

describe('TambahtransaksiPage', () => {
  let component: TambahtransaksiPage;
  let fixture: ComponentFixture<TambahtransaksiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahtransaksiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TambahtransaksiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
