import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeveragesAndDessertsService {

  apiUrl='https://beverages-and-desserts.p.rapidapi.com/desserts'

  constructor(private Http : HttpClient) { }

   getData():Observable<any>{
     
    let header = new HttpHeaders({
      'X-RapidAPI-Key': '6b4e83b1a4msh4d9506327a130b4p1ede68jsna5e81230feda',
      'X-RapidAPI-Host': 'beverages-and-desserts.p.rapidapi.com'
    })

    return this.Http.get(this.apiUrl,{headers:header});
   }

}
