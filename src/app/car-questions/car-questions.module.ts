import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarQuestionsComponent } from './car-questions/car-questions.component';
import { CarQuestionComponent } from './car-question/car-question.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarQuestionsComponent, CarQuestionComponent]
})
export class CarQuestionsModule { }
