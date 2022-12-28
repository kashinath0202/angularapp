import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDireDirective } from '../custom-dire.directive';



@NgModule({
  declarations: [
    CustomDireDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomDireDirective
  ]
})
export class SharedCustomDirectiveModule { }
