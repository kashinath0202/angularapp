import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveSecondService {

  constructor() { }
  checkUsernameAndPassword(uName:string,password:string){
       if((uName == 'kashi' && password == 'kashi')){
           sessionStorage.setItem('uName','kashi');
           return true
       }else{
        return false
       }
  }
}
