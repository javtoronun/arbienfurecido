import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regla6Component } from './regla6.component';

describe('Regla6Component', () => {
  let component: Regla6Component;
  let fixture: ComponentFixture<Regla6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regla6Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regla6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
