import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regla14Component } from './regla14.component';

describe('Regla14Component', () => {
  let component: Regla14Component;
  let fixture: ComponentFixture<Regla14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regla14Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regla14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
