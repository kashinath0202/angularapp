import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeletePostService {

  constructor(private _httpClint : HttpClient) { }

   deletePostId(id){

    return this._httpClint.delete(`${ApiUrl}posts/` + id )
   }


}
 