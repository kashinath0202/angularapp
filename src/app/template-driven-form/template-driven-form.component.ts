import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employeeDetails';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  // employee= new Employee();

  empDataShow:boolean=false;

  // employee: Employee;

  constructor() { }

  ngOnInit() {
  }

  registration(regForm:NgForm){
   console.log(regForm.value);
   // Direct access value
  //  console.log(regForm.value.EmailID);
  //  console.log(regForm.value.MobileNumber);
  //  console.log(regForm.value.DateOfBirth);
  //  console.log(regForm.value.userDetails.FirstName);
  //  console.log(regForm.value.userDetails.MiddleName);
  //  console.log(regForm.value.userDetails.LastName);
  //  console.log(regForm.value.userAddress.PermanentAddress);
  //  console.log(regForm.value.userAddress.PinCode);
  }









   // create class
  // registration(regForm:NgForm){
    
  //   var emp= new Employee();

  //   emp.FirstName = regForm.value.userDetails.FirstName;
  //   emp.MiddleName = regForm.value.userDetails.MiddleName;
  //   emp.LastName = regForm.value.userDetails.LastName;
  //   emp.PermanentAddress = regForm.value.userAddress.PermanentAddress;
  //   emp.PinCode = regForm.value.userAddress.PinCode;
  //   emp.EmailID = regForm.value.EmailID;
  //   emp.MobileNumber = regForm.value.MobileNumber;
  //   emp.DateOfBirth = regForm.value.DateOfBirth;

  //   this.saveEmployeeData(emp)
  // }

  // saveEmployeeData(emp:Employee){
        
  //     console.log(emp.FirstName);
  //     console.log(emp.MiddleName);
  //     console.log(emp.LastName);
  //     console.log(emp.EmailID);
  //     console.log(emp.MobileNumber);
  //     console.log(emp.PermanentAddress);
  //     console.log(emp.PinCode);
  //     console.log(emp.DateOfBirth);
      
  // }












  // registration(regForm:NgForm){
    
  //     this.empDataShow=true;

  //  this.employee.FirstName = regForm.value.userDetails.FirstName;
  //  this.employee.MiddleName = regForm.value.userDetails.MiddleName;
  //  this.employee.LastName = regForm.value.userDetails.LastName;
  //  this.employee.PermanentAddress = regForm.value.userAddress.PermanentAddress;
  //  this.employee.PinCode = regForm.value.userAddress.PinCode;
  //  this.employee.EmailID = regForm.value.EmailID;
  //  this.employee.MobileNumber = regForm.value.MobileNumber;
  //  this.employee.DateOfBirth = regForm.value.DateOfBirth;


  //  this.saveEmployeeData(this.employee)
  // }


  // saveEmployeeData(emp:Employee){


  // }
}
