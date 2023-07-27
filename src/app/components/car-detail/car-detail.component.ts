import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarDetail } from 'src/app/models/car-detail';
import { CarDetailService } from 'src/app/services/car-detail.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  imageUrl = 'https://localhost:44396/Uploads/Images/';
  cars:Car[]=[];
  carDetails: CarDetail[]=[];
  images: string[] = [];
  image:string[];
  currentImage: string;
  currentIndex: number = 0;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute,private carImageService:CarImageService,
    private carDetailService:CarDetailService ) {
  }

  getCarsById(carId: number) {
    this.carService.getCarsById(carId).subscribe(result => {
      this.carDetails = result.data;
    })
  }
 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["carId"]) {
        this.getCarsById(params["carId"])
        this.getImageByCar(params["carId"])
      }
    })
  }

  getImageByCar(carId: number) {
    this.carImageService.getCarImagesByCar(carId).subscribe(value => {
      value.data.map(value1 => this.images = value1.imagePath.split(",")),
        this.images = value.data.map(value1 => value1.imagePath.split(",")).flat();
      this.currentImage = this.images[0];
    })
  }

  nextImage() {
    if (this.currentIndex + 1 <= this.images.length - 1)
      this.currentIndex += 1;
    else
      this.currentIndex = 0;
    this.currentImage = this.images[this.currentIndex]
  }

  prevImage() {
    if (this.currentIndex - 1 >= 0)
      this.currentIndex -= 1;
    else if (this.currentIndex - 1 < 0)
      this.currentIndex = this.images.length - 1;
    this.currentImage = this.images[this.currentIndex]
  }

  loadImage() {
    return this.imageUrl + this.currentImage;
  }

  // getButtonClass(car: string) {
  //   if (image == this.image[0]) {
  //     return 'active';
  //   } else {
  //     return '';
  //   }
  // }
}