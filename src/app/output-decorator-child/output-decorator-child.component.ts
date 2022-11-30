import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-decorator-child',
  templateUrl: './output-decorator-child.component.html',
  styleUrls: ['./output-decorator-child.component.css']
})
export class OutputDecoratorChildComponent implements OnInit {

    @Output() employeeDetail:EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  Employee:any=[
    {empId:1,empName:'Sachin',empCompany:'TCS',empSallary:80000,empWorkingLocation:'Bengalor'},
    {empId:2,empName:'Sandip',empCompany:'Wipro',empSallary:90000,empWorkingLocation:'Hydrabad'},
    {empId:3,empName:'Rohit',empCompany:'HP',empSallary:70000,empWorkingLocation:'Pune'},
    {empId:4,empName:'Virat',empCompany:'Amezon',empSallary:95000,empWorkingLocation:'Mumbai'},
    {empId:5,empName:'Yash',empCompany:'Flipkart',empSallary:100000,empWorkingLocation:'Nagapur'},
  ]


  ngOnInit() {
  }
  clickEvent(value){
    
    this.employeeDetail.emit(this.Employee)

  }


}
