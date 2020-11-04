import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regla11Component } from './regla11.component';

describe('Regla11Component', () => {
  let component: Regla11Component;
  let fixture: ComponentFixture<Regla11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regla11Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regla11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
