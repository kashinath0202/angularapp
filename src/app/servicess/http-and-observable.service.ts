import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpAndObservableService {

           // implement on http-and-observable-first component

    apiUrl='https://jsonplaceholder.typicode.com/users';         // json placeholder url

  constructor(private Http:HttpClient) { }

  

  getUsersData(){
    return this.Http.get(this.apiUrl)
  }
}
 