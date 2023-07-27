import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"colors", component:ColorComponent},
  {path:"brands", component:BrandComponent},
  {path:"rentals", component:RentalComponent},
  {path:"customers", component:CustomerComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  { path: 'cars/:carId', component: CarDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }