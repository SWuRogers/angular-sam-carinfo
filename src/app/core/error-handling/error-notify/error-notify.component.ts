import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../notification-service/notification.service';

@Component({
  selector: 'app-error-notify',
  templateUrl: './error-notify.component.html',
  styleUrls: ['./error-notify.component.scss']
})
export class ErrorNotifyComponent implements OnInit {

  constructor(private notiSvc: NotificationService) { }

  msg: string;

  ngOnInit() {
    this.notiSvc.notification$.subscribe( v => {
      this.msg = v;
    });
  }

}
