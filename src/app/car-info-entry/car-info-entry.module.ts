import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarInfoEntryComponent } from './car-info-entry.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [CarInfoEntryComponent],
  exports: [FormsModule, ReactiveFormsModule]
})
export class CarInfoEntryModule { }
