import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-str-intrpolution',
  templateUrl: './str-intrpolution.component.html',
  styleUrls: ['./str-intrpolution.component.css']
})
export class StrIntrpolutionComponent  {

name:string='KASHINATH';
moNumber:number= +919096949202;
pinCode:number = 413305;
tal:string= 'Mangalwedha';
dist='Solapur'

id:number = 100;
isServer: string = 'offline'

serverStatus(){
   return this.isServer
}

friendName:string= 'Pankaj';
bestFriend:string = 'Ajay';
closeFriend: string = '.......'

  constructor() { 
    setTimeout(()=>{
      return this.closeFriend = 'Sajd Sir'
     },5000)
  }

    url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZUMfKAYOSr_qhRaENCww1LuwpONwE4jYOQ&usqp=CAU';

  sallary:number=50000;

    myName(){
    return  this.bestFriend+' '+this.sallary
    }
}
