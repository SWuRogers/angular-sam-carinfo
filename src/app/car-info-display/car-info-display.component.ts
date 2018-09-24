import { Component, OnInit, Input } from '@angular/core';
import { CarInfo, CarinfoService } from '../core/carinfo-service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-car-info-display',
  templateUrl: './car-info-display.component.html',
  styleUrls: ['./car-info-display.component.scss']
})
export class CarInfoDisplayComponent implements OnInit {


  carInfo: CarInfo;
  
  constructor(private carInfoClient: CarinfoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        console.log(params.get('id'));
        return this.carInfoClient.getCar(+params.get('id'));
      })
    ).subscribe( v => {
      this.carInfo = v;
    });
  }

}
