import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

 @Injectable()
export class SingletonService {       

  constructor() { }

  storeNumber:number[]=[100]
   
  addNumber(num:number){                     // add number in storeNumber array 
     this.storeNumber.push(num)
  }

  showNumber(){
   return this.storeNumber;
  }

}
