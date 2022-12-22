import { Component, OnInit } from '@angular/core';
import { SingletonService } from '../servicess/singleton.service';

@Component({
  selector: 'app-service-singleton-first',
  templateUrl: './service-singleton-first.component.html',
  styleUrls: ['./service-singleton-first.component.css'],
  //providers:[SingletonService]                                // concept of multiple (provider is component level)
  
})
export class ServiceSingletonFirstComponent implements OnInit {

  constructor(private _singletonService :SingletonService) {   // di
    this._singletonService.showNumber
   }

   numbers:number[];                                            // store the value in numbers array in html side 
  ngOnInit() {

    this.numbers = this._singletonService.showNumber();             // get value from the service 
    
  }

  onClick(num:number){     // get value from user
    console.log(num);
    
      this._singletonService.addNumber(num);     // pass value from service addNumber() method
      this.numbers = this._singletonService.showNumber();         // get value from the service 
  }

  removeValue(){
    this.numbers.splice(1,1)
  }

}
