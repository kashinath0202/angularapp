import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information/information.component';
import { RouterAboutUsComponent } from './router-about-us.component';
import { RouterModule, Routes } from '@angular/router';

const info : Routes = [
   {path:'',component:RouterAboutUsComponent,
             children:[
    {path:'information',component:InformationComponent}          

   ]}  
]

@NgModule({
  declarations: [
    InformationComponent,
    RouterAboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(info)
  ],
  exports:[
    RouterModule
  ]
})
export class AboutModule {
  constructor(){
    console.log('About US Module call');
    
  }
 }
