import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { CarEntry, CarMake, CarInfo } from '../carinfo-service';

@Injectable({
  providedIn: 'root'
})
export class CarinfoService {

  constructor(private http: HttpClient, @Inject('BaseUrl') private baseUrl: string) { }

  getCarmakes() : Observable<CarMake[]>{
    return this.http.get<CarMake[]>(`${this.baseUrl}/car/makes`);
  }

  addCarEntry(entry: CarEntry): Observable<any> {
    return this.http.post<CarInfo>(`${this.baseUrl}/car`, entry);
  }

  getCar(carId: number): Observable<CarInfo>{
    return this.http.get<CarInfo>(`${this.baseUrl}/car/${carId}`);
  }
}

