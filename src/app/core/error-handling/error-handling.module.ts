import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyErrorsHandler } from './my-error-handler';
import { ErrorNotifyComponent } from './error-notify/error-notify.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ErrorNotifyComponent],
  providers: [
    {provide: ErrorHandler, useClass: MyErrorsHandler},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
  ],
  exports: [ErrorNotifyComponent]
})
export class ErrorHandlingModule { }
