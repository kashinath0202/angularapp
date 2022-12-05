import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorator-parent-practice',
  templateUrl: './decorator-parent-practice.component.html',
  styleUrls: ['./decorator-parent-practice.component.css']
})
export class DecoratorParentPracticeComponent implements OnInit {

  constructor() { }


data:string;
  getData({target}){
    
  
     //  String Pass 
   const {value} = target;   // object Destructure
    this.data=value
  }
  types:any;
  clear(value){              // clear button
    this.types='';
  }
// array pass
   
arrayData:any[]=[]
trData({target}){
   const {value}=target
   this.arrayData.push(value)
}

allArrayData:any[]=[]
trDataComp({target}){
  const {value}=target
  this.allArrayData.push(value)
}

//object pass

emp:any={};

empData({target}){
  const {value}=target;
  this.emp={
    name:value,
    id:Math.random()
  }
}

  ngOnInit() {
  }

}
