import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CricketService {

  constructor(private _httpClient : HttpClient) { }

  cricketUrl= 'https://youtube-music1.p.rapidapi.com/v2/search?query=eminem';

  getCricketData():Observable<any>{
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '6b4e83b1a4msh4d9506327a130b4p1ede68jsna5e81230feda',
    'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
    })
     return this._httpClient.get(this.cricketUrl,{headers:headers})
  }
}
