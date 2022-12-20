import { Component, OnInit } from '@angular/core';
import { HttpAndObservableService } from '../servicess/http-and-observable.service';

@Component({
  selector: 'app-http-and-observables-first',
  templateUrl: './http-and-observables-first.component.html',
  styleUrls: ['./http-and-observables-first.component.css']
})
export class HttpAndObservablesFirstComponent implements OnInit {

  constructor(private _demoService:HttpAndObservableService) { }

    userData=[];
 
  ngOnInit() {
     this._demoService.getUsersData().subscribe(data=>{
     
         console.log('Getting data from jsonPlaceholder',data);
         this.userData.push(data)
     });
  }
   
}
