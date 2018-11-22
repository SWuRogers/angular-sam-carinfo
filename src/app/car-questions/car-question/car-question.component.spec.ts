import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarQuestionComponent } from './car-question.component';
import { TextBoxQuestion } from '../model/question-text';
import { DropdownQuestion } from '../model/question-dropdown';

describe('CarQuestionComponent', () => {
  let component: CarQuestionComponent;
  let fixture: ComponentFixture<CarQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarQuestionComponent ]
    })
    .compileComponents();
  }));

  describe('TextBoxQuestion', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(CarQuestionComponent);
      component = fixture.componentInstance;
      component.question = new TextBoxQuestion();
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
  describe('DropDownBoxQuestion', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(CarQuestionComponent);
      component = fixture.componentInstance;
      component.question = new DropdownQuestion();
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

});
