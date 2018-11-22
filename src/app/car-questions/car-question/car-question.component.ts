import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../model/question-base';

@Component({
  selector: 'app-car-question',
  templateUrl: './car-question.component.html',
  styleUrls: ['./car-question.component.scss']
})
export class CarQuestionComponent implements OnInit {

  @Input() question: QuestionBase<any>;

  constructor() { }

  ngOnInit() {
  }
  

}
