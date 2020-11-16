import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regla17Component } from './regla17.component';

describe('Regla17Component', () => {
  let component: Regla17Component;
  let fixture: ComponentFixture<Regla17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regla17Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regla17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
