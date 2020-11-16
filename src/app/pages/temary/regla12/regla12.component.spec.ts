import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regla12Component } from './regla12.component';

describe('Regla12Component', () => {
  let component: Regla12Component;
  let fixture: ComponentFixture<Regla12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regla12Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regla12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
