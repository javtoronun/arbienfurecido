import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemaryPage } from './temary.page';

describe('TemaryPage', () => {
  let component: TemaryPage;
  let fixture: ComponentFixture<TemaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
