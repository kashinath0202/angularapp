import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook-parent',
  templateUrl: './life-cycle-hook-parent.component.html',
  styleUrls: ['./life-cycle-hook-parent.component.css']
})
export class LifeCycleHookParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data:string ='green'; // Default Color Set
  
  getData(value){
      this.data = value.target.value;
  }

    // using Button remove the child component in dom 

  appChild:Boolean=true

  destroyCall(){
    this.appChild=false
  }

}
