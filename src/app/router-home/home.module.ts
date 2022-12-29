import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterHomeComponent } from './router-home.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path:'',component:RouterHomeComponent}
]

@NgModule({
  declarations: [
    RouterHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HomeModule {
  constructor(){
    console.log('Home Module Call');
    
  }
 }
