import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  greet:string='Morning';

  dist:string='Solapur';

  action:boolean=true;

  showMe(){
    this.action=false
  }

  isShows:boolean=false

 
    

  constructor() { 
    setTimeout(() => {
      this.greet='Afternoon'
    },5000);


    setTimeout(() => {
      this.isShows=true
    },3000);
 
  }
  ngOnInit() {
  }

// attribute binding
  style:number=3;
  merge:number=3;
 
// class binding

classes:boolean=true

//style binding

marg='15px'

// Event Binding

getData(){
  console.log('A Am Angular Developer');
  
}

allKey:string;

enterKey(value){
let show = value.target.value
this.allKey=show

}

}




