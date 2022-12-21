import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpAndObservableSecondService {

                // implement on http-and-observable-second component

   apiUrl='https://jsonplaceholder.typicode.com/';   // json placeholder main URL
                                                          //  Duplication avoided
                                                          

       // get the data one url from the two type data (User & Post)                                                   

  constructor(private Http:HttpClient) { }

  getUserData(){
    let userUrl='users';                            // jsonPlaceholder user url  // EndPoint => users

    return this.Http.get(this.apiUrl+userUrl);
    
  }                                                      

  getPostData(){                                        
    let postUrl='posts';                            // jsonPlaceholder Post url // EndPoint => posts
    return this.Http.get(this.apiUrl+postUrl)
  }
}
