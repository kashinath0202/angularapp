import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetApiBeveragesAndDessertsComponent } from './get-api-beverages-and-desserts/get-api-beverages-and-desserts.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { BeveragesAndDessertsService } from 'src/app/services/beverages-and-desserts.service';
import { SimpleCurdOpComponent } from './simple-curd-op/simple-curd-op.component';
import { FruitsComponent } from './fruits/fruits.component';
import { CricketComponent } from './cricket/cricket.component';
import { SongsGetComponent } from './songs-get/songs-get.component';



@NgModule({
   declarations: [
      DeletePostComponent  ,
      GetApiBeveragesAndDessertsComponent,
      SimpleCurdOpComponent,
      FruitsComponent,
      CricketComponent,
      SongsGetComponent
  ],
  imports: [
    CommonModule
  ],
 
  exports:[
    DeletePostComponent,
    GetApiBeveragesAndDessertsComponent,
    SimpleCurdOpComponent,
    FruitsComponent,
    CricketComponent,
    SongsGetComponent
  ]
})
export class CurdModule { }
