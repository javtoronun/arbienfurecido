import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regla7Component } from './regla7.component';

describe('Regla7Component', () => {
  let component: Regla7Component;
  let fixture: ComponentFixture<Regla7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regla7Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regla7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
