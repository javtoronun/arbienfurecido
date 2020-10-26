import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regla2Component } from './regla2.component';

describe('Regla2Component', () => {
  let component: Regla2Component;
  let fixture: ComponentFixture<Regla2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regla2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
