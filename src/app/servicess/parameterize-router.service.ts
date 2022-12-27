import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParameterizeRouterService {

  constructor(private Http: HttpClient) {

  }
        

   getUserData():Observable<any>{
     return  this.Http.get(`${ApiUrl}posts`)
   }

   getPostIdData(id){
    return this.Http.get(`${ApiUrl}posts/` + id)
   }
  
}
