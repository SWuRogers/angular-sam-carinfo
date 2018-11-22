import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CarInfoEntryModule } from './car-info-entry/car-info-entry.module';
import { CarInfoDisplayModule } from './car-info-display/car-info-display.module';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandlingModule } from './core/error-handling/error-handling.module';
import { CarQuestionsModule } from './car-questions/car-questions.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarInfoEntryModule,
    CarInfoDisplayModule,
    HttpClientModule,
    ErrorHandlingModule,
    CarQuestionsModule
  ],
  providers: [
    {provide: 'BaseUrl', useValue: 'http://mywin:5000'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
