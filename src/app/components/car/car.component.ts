import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/car-detail';
import { CarImage } from 'src/app/models/car-image';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetails: CarDetail[]=[];
  carImages: CarImage[]=[];
  imageOfPath:string;
  baseUrl="https://localhost:44396/Uploads/Images/"

  constructor(private carService: CarService,
    private activatedRoute:ActivatedRoute,
    private carDetailService:CarDetailService,
    private carImageService:CarImageService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"])
      {
        this.getCarsByBrand(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }
      else{
        this.getCars();
      }
    })
  }

  getCars() {
    this.carDetailService.getAllCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.carDetails=response.data
    })
  };
  getCarsByColor(ColorId:number){
    this.carService.getCarsByColor(ColorId).subscribe(response=>{
      this.carDetails=response.data
    })
  };
  getCarImageByCarId(carId:number){
    this.carImageService.getCarImagesByCar(carId).subscribe(response=>{
      const imagePath=response.data[2].imagePath;
      this.imageOfPath = this.baseUrl+imagePath;
    })
    return this.imageOfPath;
  }
}