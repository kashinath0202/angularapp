import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsGetService {

  constructor(private _httpClient : HttpClient) { }
  
   songsUrl='https://shazam.p.rapidapi.com/search?term=kiss the rain';

   getSongs():Observable<any>{
                let headers = new HttpHeaders({
                  'X-RapidAPI-Key': '6b4e83b1a4msh4d9506327a130b4p1ede68jsna5e81230feda',
                  'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                })

    return this._httpClient.get(this.songsUrl,{headers:headers})
   }

}
