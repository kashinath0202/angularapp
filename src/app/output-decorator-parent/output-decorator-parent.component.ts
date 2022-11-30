import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-decorator-parent',
  templateUrl: './output-decorator-parent.component.html',
  styleUrls: ['./output-decorator-parent.component.css']
})
export class OutputDecoratorParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 data:any[]=[]

 hanEvent(value){
   
  console.table(value)
    
       this.data=value;
  }
}
