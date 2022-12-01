import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-change-parent',
  templateUrl: './on-change-parent.component.html',
  styleUrls: ['./on-change-parent.component.css']
})
export class OnChangeParentComponent implements OnInit {
  allEmploy:any;
  constructor() { }

  Employee:any[]=[
    {empId:1,empName:'Sachin',empCompany:'TCS',empSallary:80000,empWorkingLocation:'Bengalor'},
    {empId:2,empName:'Sandip',empCompany:'Wipro',empSallary:90000,empWorkingLocation:'Hydrabad'},
    {empId:3,empName:'Rohit',empCompany:'HP',empSallary:70000,empWorkingLocation:'Pune'},
    {empId:4,empName:'Virat',empCompany:'Amezon',empSallary:95000,empWorkingLocation:'Mumbai'},
    {empId:5,empName:'Yash',empCompany:'Flipkart',empSallary:100000,empWorkingLocation:'Nagapur'},
  ]
     

  ngOnInit() {
  }




}
