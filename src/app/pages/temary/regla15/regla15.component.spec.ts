import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regla15Component } from './regla15.component';

describe('Regla15Component', () => {
  let component: Regla15Component;
  let fixture: ComponentFixture<Regla15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regla15Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regla15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
