import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormDetails } from '../models/formData';

@Component({
  selector: 'app-template-driven-assign',
  templateUrl: './template-driven-assign.component.html',
  styleUrls: ['./template-driven-assign.component.css']
})
export class TemplateDrivenAssignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(regForm:NgForm){

    console.log(regForm);
    console.log(regForm.value.email);
    console.log(regForm.value.subscriptions);
    console.log(regForm.value.password);
    
  }



  byDefault:string='Advanced';  // by default value




  // allData:FormDetails;


  // onSubmitForm(regForm:NgForm){
   
  //  var data=new FormDetails();
   
  //   data.email=regForm.value.email;
  //   data.subscriptions=regForm.value.subscriptions;
  //   data.password=regForm.value.password;
    
  //      this.saveAllData(data)
  // }

  // saveAllData(data:FormDetails){
  //   console.log(data.email);
  //   console.log(data.subscriptions);
  //   console.log(data.password);
  // }
}
