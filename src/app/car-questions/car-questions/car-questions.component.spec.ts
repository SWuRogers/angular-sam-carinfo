import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarQuestionsComponent } from './car-questions.component';

describe('CarQuestionsComponent', () => {
  let component: CarQuestionsComponent;
  let fixture: ComponentFixture<CarQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
