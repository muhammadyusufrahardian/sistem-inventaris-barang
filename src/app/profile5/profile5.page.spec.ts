import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Profile5Page } from './profile5.page';

describe('Profile5Page', () => {
  let component: Profile5Page;
  let fixture: ComponentFixture<Profile5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Profile5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Profile5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
