import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-assign',
  templateUrl: './custom-pipe-assign.component.html',
  styleUrls: ['./custom-pipe-assign.component.css']
})
export class CustomPipeAssignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  empData=[
    {EmpId:1, name:'Sachin',age:25, gender:'Male', State:'Maharashtra'},
    {EmpId:2, name:'Sneha',age:26, gender:'Female', State:'Karanata'},
    {EmpId:3, name:'Sandy',age:27, gender:'Male', State:'Keral'},
    {EmpId:4, name:'Sonali',age:28, gender:'Female', State:'Gujarat'},
    {EmpId:5, name:'Vikas',age:29, gender:'Male', State:'UP'},
    {EmpId:6, name:'Riya',age:20, gender:'Female', State:'Panjab'},
    {EmpId:7, name:'Prashant',age:25, gender:'Male', State:'MP'},
  ]
  
}
