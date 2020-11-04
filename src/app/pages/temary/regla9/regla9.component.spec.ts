import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regla9Component } from './regla9.component';

describe('Regla9Component', () => {
  let component: Regla9Component;
  let fixture: ComponentFixture<Regla9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regla9Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regla9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
