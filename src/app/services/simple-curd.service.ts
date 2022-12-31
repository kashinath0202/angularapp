import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleCurdService {

  constructor(private _httpClient : HttpClient) { }

  apiUrl='https://bb-finance.p.rapidapi.com/market/auto-complete?query=apple';

     getAllData(){
      let headers = new HttpHeaders({
        'X-RapidAPI-Key': '6b4e83b1a4msh4d9506327a130b4p1ede68jsna5e81230feda',
        'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com'
      });
      return this._httpClient.get(this.apiUrl,{headers:headers})
     }
}
