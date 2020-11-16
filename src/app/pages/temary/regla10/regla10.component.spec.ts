import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regla10Component } from './regla10.component';

describe('Regla10Component', () => {
  let component: Regla10Component;
  let fixture: ComponentFixture<Regla10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regla10Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regla10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
