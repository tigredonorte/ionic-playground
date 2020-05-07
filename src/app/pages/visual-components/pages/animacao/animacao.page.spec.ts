import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimacaoPage } from './animacao.page';

describe('AnimacaoPage', () => {
  let component: AnimacaoPage;
  let fixture: ComponentFixture<AnimacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
