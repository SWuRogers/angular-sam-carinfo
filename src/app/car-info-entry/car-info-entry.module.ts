import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarInfoEntryComponent } from './car-info-entry.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StarDirective } from './star.directive';
import { StarSpanComponent } from './star-span/star-span.component';

@NgModule({
  entryComponents: [StarSpanComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [CarInfoEntryComponent, StarDirective, StarSpanComponent],
  exports: [FormsModule, ReactiveFormsModule]
})
export class CarInfoEntryModule { }
