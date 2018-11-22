import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../model/question-base';
import { FormGroup } from '@angular/forms';
import { CarQuestionCtlService } from '../car-question-ctl.service';


@Component({
  selector: 'app-car-questions',
  templateUrl: './car-questions.component.html',
  styleUrls: ['./car-questions.component.scss']
})
export class CarQuestionsComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: CarQuestionCtlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit(){
    this.payLoad = JSON.stringify(this.form.value);
  }

}
