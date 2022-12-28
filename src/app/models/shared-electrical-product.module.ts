import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBGDirective } from '../custom-bg.directive';



@NgModule({
  declarations: [
    CustomBGDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomBGDirective
  ]
})
export class SharedElectricalProductModule { }
