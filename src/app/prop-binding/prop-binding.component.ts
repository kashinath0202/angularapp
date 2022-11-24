import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop-binding.component.html',
  styleUrls: ['./prop-binding.component.css']
})
export class PropBindingComponent {

stateName:string = 'Maharashtra'
countryName:string = 'INDIA'
allowCountryName = false;
//allowCountryName = true

  constructor() { 
    setTimeout(()=>{
      this.allowCountryName = true
    },5000)                            // enable to after 5 second

    // img
    setTimeout(()=>{
      this.imgUrl = 'https://pps.whatsapp.net/v/t61.24694-24/295605278_837962954318125_554643777037776386_n.jpg?ccb=11-4&oh=01_AdQVzDfdJ_5rikCns6kMZZxfyCQy_yPhEsWDUHEbxmA_ow&oe=638C0D14';
    },5000)

  }

//  adding img

imgUrl = 'Teacher Img'
 
}
