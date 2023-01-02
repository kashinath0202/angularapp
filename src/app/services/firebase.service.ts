import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebasePost } from '../models/firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private _httpClient : HttpClient) { }

  fireBaseUrl ='https://angular-curd-operation-default-rtdb.firebaseio.com/';


  createPost(){
  
      let postData = {
        title : 'This is Angular 8 CURD',
        content : 'This is Firebase CURD operation with post'
      }
        
      return this._httpClient.post(this.fireBaseUrl + 'posts.json' , postData)
  }

  DeletePostData(index){
  return  this._httpClient.delete(this.fireBaseUrl + 'posts.json');
  }

   
  postReactiveForm(firebase:FirebasePost){
  return  this._httpClient.post(this.fireBaseUrl + 'posts.json',firebase);
 }


 getPostDataFirebase():Observable<any>{
   return this._httpClient.get(this.fireBaseUrl + 'posts.json');
 }                                                //posts = any name endPoint
}
