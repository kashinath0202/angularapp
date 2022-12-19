import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employeeData';

@Component({
  selector: 'app-template-driven-form-practice',
  templateUrl: './template-driven-form-practice.component.html',
  styleUrls: ['./template-driven-form-practice.component.css']
})
export class TemplateDrivenFormPracticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  byDefault:string='Maharashtra'   //by default Selected value

  defaultGender:string='Male'  //by default Selected Gender

   employee: Employee

  // For (radio) Gender

  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'}
  ]


    // For (radio) Gender

    languages=[
      {id:1, value:'English'},
      {id:2, value:'Hindi'},
      {id:3, value:'Marathi'},
    ]

    //  employeeSubmit(empForm:NgForm){

    //   console.log(empForm);
    //  console.log(empForm.value);
    //   console.log(empForm.value.Username);
    //   console.log(empForm.value.password);
    //   console.log(empForm.value.email);
    //   console.log(empForm.value.DateOfBirth);
    //   console.log(empForm.value.gender);
    //   console.log(empForm.value.language);
    //   console.log(empForm.value.allAddress.Address);
    //   console.log(empForm.value.allAddress.State);
    //   console.log(empForm.value.allAddress.pinCode);
         
                
    // }

   //  Create Class

   employeeSubmit(empForm:NgForm){
    console.log(empForm.value);
    
     var emp = new Employee()
      emp.Username=empForm.value.Username;
      emp.password=empForm.value.password
      emp.email=empForm.value.email
      emp.DateOfBirth=empForm.value.DateOfBirth
      emp.gender=empForm.value.gender
      emp.language=empForm.value.language
      emp.Address=empForm.value.allAddress.Address
      emp.State=empForm.value.allAddress.State
      emp.pinCode=empForm.value.allAddress.pinCode

      this.saveEmployeeForm(emp)
    }






    saveEmployeeForm(emp:Employee){
          
        console.log(emp.Username);
        console.log(emp.password);
        console.log(emp.email);
        console.log(emp.DateOfBirth);
        console.log(emp.gender);
        console.log(emp.language);
        console.log(emp.Address);
        console.log(emp.State);
        console.log(emp.pinCode);
        
    }




    // employeeSubmit(empForm:NgForm){
    //   console.log(empForm.value);
    //   this.employee.Username=empForm.value.Username;
    //   this.employee.password=empForm.value.password
    //   this.employee.email=empForm.value.email
    //   this.employee.DateOfBirth=empForm.value.DateOfBirth
    //   this.employee.gender=empForm.value.gender
    //   this.employee.language=empForm.value.language
    //   this.employee.Address=empForm.value.allAddress.Address
    //   this.employee.State=empForm.value.allAddress.State
    //   this.employee.pinCode=empForm.value.allAddress.pinCode
  
    //     this.saveEmployeeForm(this.employee)
    //   }

    //     saveEmployeeForm(employee:Employee){

    //   }
}
