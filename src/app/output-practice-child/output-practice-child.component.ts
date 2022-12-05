import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-practice-child',
  templateUrl: './output-practice-child.component.html',
  styleUrls: ['./output-practice-child.component.css']
})
export class OutputPracticeChildComponent implements OnInit {

  @Output() transferName:EventEmitter<any> = new EventEmitter<any>()
  @Output() empData:EventEmitter<any> = new EventEmitter<any>()

  constructor() { }
// 1st practice
  passName(value){
    this.transferName.emit(value)
  }

// 2st practice

Employee:any[]=[
  {empId:'11',empName:'Sachin',empAge:30,empAddress:'Pune'},
  {empId:'12',empName:'Sandip',empAge:60,empAddress:'Mangalwedha'},
  {empId:'13',empName:'Pankaj',empAge:50,empAddress:'Sangola'},
  {empId:'14',empName:'Ajay',empAge:34,empAddress:'Solapur'},
  {empId:'15',empName:'Sajid',empAge:33,empAddress:'Mumbai'},

]

clickEvent(){
  this.empData.emit(this.Employee)
}

  ngOnInit() {
    
  }

}
