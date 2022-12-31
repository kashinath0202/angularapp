import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetApiBeveragesAndDessertsComponent } from './get-api-beverages-and-desserts/get-api-beverages-and-desserts.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { BeveragesAndDessertsService } from 'src/app/services/beverages-and-desserts.service';
import { SimpleCurdOpComponent } from './simple-curd-op/simple-curd-op.component';
import { FruitsComponent } from './fruits/fruits.component';
import { CricketComponent } from './cricket/cricket.component';



@NgModule({
   declarations: [
      DeletePostComponent  ,
      GetApiBeveragesAndDessertsComponent,
      SimpleCurdOpComponent,
      FruitsComponent,
      CricketComponent
  ],
  imports: [
    CommonModule
  ],
 
  exports:[
    DeletePostComponent,
    GetApiBeveragesAndDessertsComponent,
    SimpleCurdOpComponent,
    FruitsComponent,
    CricketComponent
  ]
})
export class CurdModule { }
