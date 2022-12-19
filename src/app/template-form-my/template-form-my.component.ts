import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/myEmployee';

@Component({
  selector: 'app-template-form-my',
  templateUrl: './template-form-my.component.html',
  styleUrls: ['./template-form-my.component.css']
})
export class TemplateFormMyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // onSubmit(myForm:NgForm){
  //       console.log(myForm);
  //       // console.log(myForm.value.UserDetails.FirstName);
  //       // console.log(myForm.value.UserDetails.MiddleName);
  //       // console.log(myForm.value.UserDetails.LastName);
  //       // console.log(myForm.value.UserDetails.DateOfBirth);
  //       // console.log(myForm.value.UserDetails.age);
  //       // console.log(myForm.value.Username);
  //       // console.log(myForm.value.EmailID);
  //       // console.log(myForm.value.MobileNumber);
  //       // console.log(myForm.value.Gender);
   //       // console.log(myForm.value.DeveloperRoll);
  //       // console.log(myForm.value.addressDetails.District);
  //       // console.log(myForm.value.addressDetails.PermanentAddress);
  //       // console.log(myForm.value.addressDetails.City);
  //       // console.log(myForm.value.addressDetails.PinCode);
  // }


  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'},
  ]

  defaultGender:string='Male'
  defaultRoll:string='Full Stack Developer'
  defaultDist:string='Pune'



  employee= new Employee()      //Employee instance create

  userData=[];              // data save for table structure

  tableDataShow:boolean=false;  //table data Show

  onSubmit(myForm:NgForm){

    console.log(myForm);
    
    this.tableDataShow=true

       this.employee.FirstName = myForm.value.UserDetails.FirstName;
       this.employee.MiddleName = myForm.value.UserDetails.MiddleName;
       this.employee.LastName = myForm.value.UserDetails.LastName;
       this.employee.DateOfBirth =  myForm.value.UserDetails.DateOfBirth;
       this.employee.age =  myForm.value.UserDetails.age;
       this.employee.Username = myForm.value.Username;
       this.employee.EmailID =  myForm.value.EmailID;
       this.employee.MobileNumber = myForm.value.MobileNumber;
       this.employee.Gender = myForm.value.Gender;
       this.employee.DeveloperRoll = myForm.value.DeveloperRoll;
       this.employee.District = myForm.value.addressDetails.District;
       this.employee.PermanentAddress = myForm.value.addressDetails.PermanentAddress;
       this.employee.City = myForm.value.addressDetails.City;
       this.employee.PinCode = myForm.value.addressDetails.PinCode;

        myForm.reset();   // reset Form
        myForm.controls['DeveloperRoll'].setValue('Full Stack Developer');
        // myForm.controls['District'].setValue('Sangali');
        myForm.controls['Gender'].setValue('Male');

       this.saveEmployeeData(this.employee)
       this.userData.push(this.employee)         // value push in array
  }

  saveEmployeeData(emp:Employee){
       console.log(emp);
       
  }
}
