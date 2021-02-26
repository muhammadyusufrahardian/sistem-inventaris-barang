import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Profile3Page } from './profile3.page';

describe('Profile3Page', () => {
  let component: Profile3Page;
  let fixture: ComponentFixture<Profile3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Profile3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Profile3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
