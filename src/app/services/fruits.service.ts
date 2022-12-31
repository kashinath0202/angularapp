import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {


  // myMethod$: Observable<any>;
  // private myMethodSubject = new Subject<any>();



  fruitUrl= 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple'

  constructor(private _Http : HttpClient) {
    // this.myMethod$ = this.myMethodSubject.asObservable();
   }

  //  myMethod(fruitUrl) {
  //   // console.log(fruitUrl); // I have data! Let's return it so subscribers can use it!
  //                      // we can do stuff with data if we want
  //   this.myMethodSubject.next(fruitUrl);
  // }

  getFruitsData():Observable<any>{

    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '6b4e83b1a4msh4d9506327a130b4p1ede68jsna5e81230feda',
      'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    })
    return this._Http.get(this.fruitUrl,{headers:headers})
  }
  
}
