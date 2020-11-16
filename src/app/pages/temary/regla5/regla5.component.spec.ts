import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regla5Component } from './regla5.component';

describe('Regla5Component', () => {
  let component: Regla5Component;
  let fixture: ComponentFixture<Regla5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regla5Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regla5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
