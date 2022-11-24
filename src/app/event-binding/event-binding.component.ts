import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent  {

//click event

  developer: string= 'Back End Developer'

  statusDev(){
    return this.developer = 'Front end Developer'
  }

//mouseover event
   friendName:string = 'SAJID'

   friend(){
    return this.friendName = 'AJAY & Pankaj'
   }

  constructor() {

   }

}
