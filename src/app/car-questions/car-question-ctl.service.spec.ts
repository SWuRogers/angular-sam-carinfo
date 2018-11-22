import { TestBed, inject } from '@angular/core/testing';

import { CarQuestionCtlService } from './car-question-ctl.service';
import { TextBoxQuestion } from './model/question-text';
import { DropdownQuestion } from './model/question-dropdown';
import { Validators } from '@angular/forms';

describe('CarQuestionCtlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });


  it('can create text formcontrol if passed in TextBoxQuestion', inject([CarQuestionCtlService], (service: CarQuestionCtlService) => {
    const fg = service.toFormGroup([new TextBoxQuestion({key: 't1'})])
    expect(fg.controls['t1']).toBeTruthy();
  }));

  it('can create text formcontrol with validation required if passed in TextBoxQuestion with required set to true', inject([CarQuestionCtlService], (service: CarQuestionCtlService) => {
    const fg = service.toFormGroup([new TextBoxQuestion({key: 't1', required: true})])
    expect(fg.controls['t1'].validator === Validators.required).toBeTruthy();
  }));

  it('can create one text and one drop down if passed in one text and one drop down', inject([CarQuestionCtlService], (service: CarQuestionCtlService) => {
    const fg = service.toFormGroup([new TextBoxQuestion({key: 't1'}), new DropdownQuestion({key: 't2', options:['a','b']})])
    expect(fg.controls['t1']).toBeTruthy();
    expect(fg.controls['t2']).toBeTruthy();
  }));

  it('should be created', inject([CarQuestionCtlService], (service: CarQuestionCtlService) => {
  expect(service).toBeTruthy();
  }));
});
