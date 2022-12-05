import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-practice-parent',
  templateUrl: './output-practice-parent.component.html',
  styleUrls: ['./output-practice-parent.component.css']
})
export class OutputPracticeParentComponent implements OnInit {
//  1st
  nameData:any[]=[];
  
  constructor() { }

  accessData(value){
        console.log(value);
        this.nameData.push(value)
        
  }

  // 2nd

  empData:any[]=[]
  accessEmpData(value){
console.table(value);
this.empData=value

  }

  ngOnInit() {
  }

}
