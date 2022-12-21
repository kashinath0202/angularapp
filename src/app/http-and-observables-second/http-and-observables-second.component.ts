import { Component, OnInit } from '@angular/core';
import { HttpAndObservableSecondService } from '../servicess/http-and-observable-second.service';

@Component({
  selector: 'app-http-and-observables-second',
  templateUrl: './http-and-observables-second.component.html',
  styleUrls: ['./http-and-observables-second.component.css']
})
export class HttpAndObservablesSecondComponent implements OnInit {

  constructor(private _HttpAndObservableSecondService:HttpAndObservableSecondService) { }  // DI

  allPostData=[]; 

  ngOnInit() {
                     // get the data userData from the service
    this._HttpAndObservableSecondService.getUserData().subscribe(userAllData=>{
         console.log('Get User Data from jsonPlaceholder',userAllData);
    })
                     // get the data PostData from the service

      this._HttpAndObservableSecondService.getPostData().subscribe(postData=>{
        console.log('Get User Data from jsonPlaceholder',postData);

        this.allPostData.push(postData);
        
      })
  }

}
