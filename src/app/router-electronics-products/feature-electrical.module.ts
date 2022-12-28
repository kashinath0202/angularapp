import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RouterElectronicsProductsComponent } from './router-electronics-products.component';
import { TvComponent } from './tv/tv.component';
import { CoolerComponent } from './cooler/cooler.component';
import { RefrigeratorsComponent } from './refrigerators/refrigerators.component';
import { AcComponent } from './ac/ac.component';
import { SharedElectricalProductModule } from '../models/shared-electrical-product.module';

const electrical : Routes = [
 
   {path:'',
            children:[
     {path:'products',component:RouterElectronicsProductsComponent},
     {path:'tv',component:TvComponent},
     {path:'cooler',component:CoolerComponent},
     {path:'refrigerators',component:RefrigeratorsComponent},
     {path:'ac',component:AcComponent}                
   ]}
]

@NgModule({
  declarations: [
    TvComponent,
    CoolerComponent,
    AcComponent,
    RefrigeratorsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(electrical),
    SharedElectricalProductModule
  ],
  exports:[
    RouterModule
  ]
})
export class FeatureElectricalModule { }
