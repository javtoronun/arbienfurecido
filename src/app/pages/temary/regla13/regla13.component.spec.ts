import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regla13Component } from './regla13.component';

describe('Regla13Component', () => {
  let component: Regla13Component;
  let fixture: ComponentFixture<Regla13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regla13Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regla13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
