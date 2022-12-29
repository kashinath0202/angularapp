import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';

const route : Routes = [
  // {path:'',component:ServiceComponent}
];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[
    RouterModule
  ]
})
export class ServiceRouterModule {
  constructor(){
     console.log('Service Router module called');
    
  }
 }
