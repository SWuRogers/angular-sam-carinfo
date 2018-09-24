import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { publish, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {

  private notification: BehaviorSubject<string> = new BehaviorSubject(null);
  readonly notification$: Observable<string> = this.notification.asObservable().pipe(publish()).pipe(refCount());
  
  notify(msg: string){
    this.notification.next(msg);
    setTimeout(() => this.notification.next(null), 6000);
    
  }

  constructor() {}
}

