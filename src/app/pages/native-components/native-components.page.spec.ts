import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NativeComponentsPage } from './native-components.page';

describe('NativeComponentsPage', () => {
  let component: NativeComponentsPage;
  let fixture: ComponentFixture<NativeComponentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeComponentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NativeComponentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
