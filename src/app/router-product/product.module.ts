import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudiComponent } from './audi/audi.component';
import { FortunerComponent } from './fortuner/fortuner.component';
import { RangeRoverComponent } from './range-rover/range-rover.component';
import { RollsRoyceComponent } from './rolls-royce/rolls-royce.component';
import { RouterProductComponent } from './router-product.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedCustomDirectiveModule } from '../models/shared-custom-directive.module';
import { CustomDireDirective } from '../custom-dire.directive';


const allProducts :Routes = [
  {path:'cars',                                             //localhost:4200/cars
              children:[
                {path:'',component:RouterProductComponent},           //localhost:4200/cars
                {path:'rollsRoyce',component:RollsRoyceComponent},     //localhost:4200/cars/rollsRoyce
                {path:'rangeRove',component:RangeRoverComponent},     //localhost:4200/cars/rangeRove
                {path:'audi',component:AudiComponent},                //localhost:4200/cars/audi
                {path:'fortuner',component:FortunerComponent}         //localhost:4200/cars/fortuner
  ]},
]

@NgModule({
  declarations: [
    AudiComponent,
    FortunerComponent,
    RangeRoverComponent,
    RollsRoyceComponent,
    RouterProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(allProducts),
    SharedCustomDirectiveModule              // using of Sheared module 
  ],

   exports:[RouterModule]
})
export class ProductModule { }
