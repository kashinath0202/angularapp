import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpAndObservableService {

    apiUrl='https://jsonplaceholder.typicode.com/users';

  constructor(private Http:HttpClient) { }

  getUsersData(){
    return this.Http.get(this.apiUrl)
  }
}
 