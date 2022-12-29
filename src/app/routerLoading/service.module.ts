import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service/service.component';
import { ServiceRouterModule } from './service-router.module';



@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    ServiceRouterModule
  ]
})
export class ServiceModule {
  constructor(){
    console.log('Service module called & lazy loading');
    
  }
 }
