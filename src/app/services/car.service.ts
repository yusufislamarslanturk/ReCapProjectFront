import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/car-detail';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44396/api/';
  constructor(private httpClient: HttpClient) {}
  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetail';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getbybrand?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getsbycolor?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsById(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getbyid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
