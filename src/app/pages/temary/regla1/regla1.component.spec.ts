import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regla1Component } from './regla1.component';

describe('Regla1Component', () => {
  let component: Regla1Component;
  let fixture: ComponentFixture<Regla1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regla1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
