import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpHeaders
} from '@angular/common/http';

import { Observable, TimeoutError } from 'rxjs';
import { tap, timeout } from 'rxjs/operators';
import { NotificationService } from '../notification-service/notification.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private notiSvc: NotificationService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    const jsonReq = req.clone({headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})});

    //return next.handle(req);
    //return next.handle(jsonReq).pipe(timeout(3000), tap( ()=>{},
    return next.handle(jsonReq).pipe(tap( ()=>{},
      (err) => {
        console.log(`From MyErrorHandler: ${err}`);

        if (err instanceof HttpErrorResponse){
          return this.notiSvc.notify(err.message + ' Please try again');
        }
        if (err instanceof TimeoutError){
          return this.notiSvc.notify('Request timeout, please try again');
        }
        
        this.notiSvc.notify('Please try again');
        
      }));
  }
}