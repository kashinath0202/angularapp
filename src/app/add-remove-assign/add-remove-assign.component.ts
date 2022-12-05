import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-remove-assign',
  templateUrl: './add-remove-assign.component.html',
  styleUrls: ['./add-remove-assign.component.css']
})
export class AddRemoveAssignComponent implements OnInit {

  constructor() { }

  mobileName:string;

  saveData(value){
     
  }

  data:any[]=[]

  addData(values){
      this.data.push({mobileName:values})
  }


  removeMobile(value){
   this.data.splice(value,1)
  }


     clearMe(){
   this.mobileName='';
  }

  ngOnInit() { 
  }

}
