import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

   reactiveForm:FormGroup

  constructor() {
    this.createForm();
   }

  ngOnInit() {
    
  }
 
  createForm(){ 

  this.reactiveForm = new FormGroup({
       
      'userName':  new  FormControl('',[Validators.required,this.NaNames.bind(this)]),
      'email': new FormControl('',[Validators.required,Validators.email]),
      'course': new FormControl('Angular',Validators.required),
      'Gender':new FormControl('Male',Validators.required),
      
      //Form Groups

      'addressDetails':new FormGroup({
      'paramentAddress': new FormControl('',[Validators.required]),
      'pinCode': new FormControl('',[Validators.required,Validators.maxLength(6),Validators.minLength(6)])
    })
  })
  }

  onSubmit(){
    console.log(this.reactiveForm);
    
  }

  genders=[
    {'id':'1',value:'Male'},
    {'id':'2',value:'Female'}
    
  ]

  notAllowedNames=['CodeMind','Technology']


  NaNames(control:FormControl){
        
    if(this.notAllowedNames.indexOf(control.value) !== -1){
      return {'namesNotAllowed':true};
    }
    return null;
  }

}
