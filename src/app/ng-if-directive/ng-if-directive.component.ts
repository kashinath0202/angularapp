import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  templateUrl: './ng-if-directive.component.html',
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent implements OnInit {

  isShow: boolean = true;

  isHide: boolean = false

  isDeclare:boolean= true

data:string;

  myInfo(){
   
    this.data= "I am angular Developer"
  }

  // Practice 2  *ngIf

  isAction:boolean=true;

  clickMe(value){
     this.isAction=value
  }

  // *ngIf with else
  isActions:boolean=true;
  clickBy(value){
    this.isActions=value
  }

  //practice 2 (*ngIf with then & else) 

  action:boolean=true;

  click(value){
    this.action=value
  }
  constructor() { }

  ngOnInit() {
  }

  
}
