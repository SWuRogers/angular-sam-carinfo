import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { CarInfoEntryComponent } from './car-info-entry/car-info-entry.component';
import { CarInfoDisplayComponent } from './car-info-display/car-info-display.component';


const appRoute : Routes = [
  {path: 'addnew', component: CarInfoEntryComponent},
  {path: 'display/:id', component: CarInfoDisplayComponent},
  {path: '**', component: CarInfoEntryComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  declarations: []
  , exports: [RouterModule]
})
export class AppRoutingModule { }
