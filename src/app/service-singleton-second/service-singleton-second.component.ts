import { Component, OnInit } from '@angular/core';
import { SingletonService } from '../servicess/singleton.service';

@Component({
  selector: 'app-service-singleton-second',
  templateUrl: './service-singleton-second.component.html',
  styleUrls: ['./service-singleton-second.component.css'],
  //providers:[SingletonService]                               // concept of multiple (provider is component level)
})
export class ServiceSingletonSecondComponent implements OnInit {

  constructor(private _singletonService :SingletonService) { }

numbers:number[];
  ngOnInit() {
            this.numbers = this._singletonService.showNumber();
  }

  onClick(number){
  console.log(number);
            this._singletonService.addNumber(number);


  }
  removeValue(){
    this.numbers.splice(1,1)
  }

}
