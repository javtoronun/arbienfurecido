import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regla16Component } from './regla16.component';

describe('Regla16Component', () => {
  let component: Regla16Component;
  let fixture: ComponentFixture<Regla16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regla16Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regla16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
