import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouterAboutUsComponent } from './router-about-us/router-about-us.component';
import { RouterContactUsComponent } from './router-contact-us/router-contact-us.component';
import { RouterHomeComponent } from './router-home/router-home.component';
import { RouterLogInComponent } from './router-log-in/router-log-in.component';
import { RouterPageNotFoundComponent } from './router-page-not-found/router-page-not-found.component';
import { RouterParaPostDetailsComponent } from './router-para-post-details/router-para-post-details.component';
import { RouterParameterizeDemoComponent } from './router-parameterize-demo/router-parameterize-demo.component';
import { AudiComponent } from './router-product/audi/audi.component';
import { FortunerComponent } from './router-product/fortuner/fortuner.component';
import { RangeRoverComponent } from './router-product/range-rover/range-rover.component';
import { RollsRoyceComponent } from './router-product/rolls-royce/rolls-royce.component';
import { RouterProductComponent } from './router-product/router-product.component';


const routes: Routes = [
  {path:'', redirectTo:'logIn', pathMatch:'full'},        // it should be first component
  {path:'logIn', component:RouterLogInComponent},
  {path:'home', component:RouterHomeComponent},
  {path:'aboutUs', component:RouterAboutUsComponent},
  {path:'contactUs', component:RouterContactUsComponent},
  // {path:'cars',                // Move to Feature Module                                  //localhost:4200/cars
  //               children:[
  //                 {path:'',component:RouterProductComponent},           //localhost:4200/cars
  //                 {path:'rollsRoyce',component:RollsRoyceComponent},     //localhost:4200/cars/rollsRoyce
  //                 {path:'rangeRove',component:RangeRoverComponent},     //localhost:4200/cars/rangeRove
  //                 {path:'audi',component:AudiComponent},                //localhost:4200/cars/audi
  //                 {path:'fortuner',component:FortunerComponent}         //localhost:4200/cars/fortuner
  //               ]},
  {path:'posts',component:RouterParameterizeDemoComponent},             //localhost:4200/posts    
  {path:'postDetails/:id',component:RouterParaPostDetailsComponent}, 
   {path:'**', component:RouterPageNotFoundComponent}                    //wild card route  It should be last component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
