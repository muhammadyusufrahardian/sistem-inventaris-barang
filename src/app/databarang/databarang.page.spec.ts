import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatabarangPage } from './databarang.page';

describe('DatabarangPage', () => {
  let component: DatabarangPage;
  let fixture: ComponentFixture<DatabarangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabarangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatabarangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
