import { Component, OnInit, Input } from '@angular/core';
import { CarInfo, CarinfoService } from '../core/carinfo-service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, delay } from 'rxjs/operators';
import { defer, of, Observable } from 'rxjs';

@Component({
  selector: 'app-car-info-display',
  templateUrl: './car-info-display.component.html',
  styleUrls: ['./car-info-display.component.scss']
})
export class CarInfoDisplayComponent implements OnInit {


  

  carInfo: CarInfo;
  
  constructor(private carInfoClient: CarinfoService, private route: ActivatedRoute) { }

  ngOnInit() {

    // const p = new Promise(r => {
    //   console.log(`PStart`);
    //   setTimeout(c => r(), 1000);
    //   console.log(`Pend`);
    // });
    
    // setTimeout(() => {
    //   console.log('MStart');
    //   p.then(() => {
    //     console.log('From Then');
    //   });
    //   console.log('MEnd');

    // }, 2000);


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
