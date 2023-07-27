import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/car-detail';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl="https://localhost:44396/api/cars/";
  constructor(private httpClient:HttpClient) { }

  getAllCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "getcardetail";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}