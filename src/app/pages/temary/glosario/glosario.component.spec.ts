import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlosarioComponent } from './glosario.component';

describe('GlosarioComponent', () => {
  let component: GlosarioComponent;
  let fixture: ComponentFixture<GlosarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlosarioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlosarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
