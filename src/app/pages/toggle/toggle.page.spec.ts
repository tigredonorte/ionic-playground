import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TogglePage } from './toggle.page';

describe('TogglePage', () => {
  let component: TogglePage;
  let fixture: ComponentFixture<TogglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TogglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
