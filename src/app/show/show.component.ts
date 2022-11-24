import { Component } from "@angular/core";

@Component({
    selector:'show-app',
    templateUrl:'./show.component.html',
    styleUrls:['show.component.css']
})

export class ShowComponent{

name : string = 'Kashinath'

moNumber:number = +91906949202;

serverStatus:string='offline'
allowNewServer  = false;

imgUrl=''

constructor(){
    setTimeout(()=>{
        this.allowNewServer = true
    },5000);
  }

}


