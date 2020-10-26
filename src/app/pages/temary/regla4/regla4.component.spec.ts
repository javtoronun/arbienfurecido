import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regla4Component } from './regla4.component';

describe('Regla4Component', () => {
  let component: Regla4Component;
  let fixture: ComponentFixture<Regla4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regla4Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regla4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
