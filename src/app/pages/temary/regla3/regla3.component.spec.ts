import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regla3Component } from './regla3.component';

describe('Regla3Component', () => {
  let component: Regla3Component;
  let fixture: ComponentFixture<Regla3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regla3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
