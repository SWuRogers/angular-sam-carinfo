import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NotificationService } from '../../notification-service/notification.service';

@Component({
  selector: 'app-error-notify',
  templateUrl: './error-notify.component.html',
  styleUrls: ['./error-notify.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorNotifyComponent implements OnInit {

  constructor(private notiSvc: NotificationService, private cd: ChangeDetectorRef) { }

  msg: string;

  ngOnInit() {
    this.notiSvc.notification$.subscribe( v => {
      this.msg = v;
      this.cd.markForCheck();

    });
  }

}
