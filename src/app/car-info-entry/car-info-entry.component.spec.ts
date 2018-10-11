import { TestBed, getTestBed, async } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'


import { CommonModule } from '@angular/common';
import { CarInfoEntryComponent } from './car-info-entry.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {CarinfoService} from '../core/carinfo-service'

describe('CarInfoEntryComponent', () => {
  let service: CarinfoService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientTestingModule
    ],
    declarations: [CarInfoEntryComponent],
    providers: [{provide: 'BaseUrl', useValue: 'http://mywin:5000'}]
    }).compileComponents();

    service = TestBed.get(CarinfoService);
    httpMock = TestBed.get(HttpTestingController);

  }));

  describe('#getUsers', () => {
    it('should return an Observable<User[]>', () => {
      const dummyCar = 
        { carId: 1 };
  
      service.getCar(1).subscribe(v  => {
        expect(v.carId).toBe(1);
      });
  
      const req = httpMock.expectOne('http://mywin:5000/car/1');
      expect(req.request.method).toBe("GET");
      req.flush(dummyCar);
    });
  });


  // it('should create the app', async(() => {
  //   // const fixture = TestBed.createComponent(CarInfoEntryComponent);
  //   // const app = fixture.debugElement.componentInstance;
  //   // const comp = fixture.componentInstance;

  //   httpMock.verify();
  //   //comp.

  // }));
  
});
