import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualComponentsPage } from './visual-components.page';

describe('VisualComponentsPage', () => {
  let component: VisualComponentsPage;
  let fixture: ComponentFixture<VisualComponentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualComponentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualComponentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
