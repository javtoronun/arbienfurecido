import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regla8Component } from './regla8.component';

describe('Regla8Component', () => {
  let component: Regla8Component;
  let fixture: ComponentFixture<Regla8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regla8Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regla8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
