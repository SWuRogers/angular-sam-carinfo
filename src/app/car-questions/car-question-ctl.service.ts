import { Injectable } from '@angular/core';
import { QuestionBase } from './model/question-base';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class CarQuestionCtlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]){
    const group: any = {};

    questions.forEach( question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}





