import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-router-registration-form',
  templateUrl: './router-registration-form.component.html',
  styleUrls: ['./router-registration-form.component.css']
})
export class RouterRegistrationFormComponent implements OnInit {

  reactiveForm:FormGroup
  FormGroup: any;

  constructor() {
    this.createForm();
   }

  ngOnInit() {
    
  }
 
  createForm(){ 

  this.reactiveForm = new FormGroup({
       
      'userName': new FormControl('',[Validators.required,this.NaNames.bind(this)]),
      'email': new FormControl('',[Validators.required,Validators.email],this.NaEmails),
      'course': new FormControl('Angular',Validators.required),
      'Gender':new FormControl('Male',Validators.required),
      
      // using addressDetails Form Group

      'addressDetails':new FormGroup({
      'paramentAddress': new FormControl('',[Validators.required]),
      'pinCode': new FormControl('',[Validators.required,Validators.maxLength(6),Validators.minLength(6)])
    })
  })
  }

  onSubmit(){
    console.log(this.reactiveForm);
    
  }

    // For Using Genders

  genders=[
    {'id':'1',value:'Male'},
    {'id':'2',value:'Female'}
    
  ]

         // Custom Validation

  notAllowedNames=['CodeMind','Technology','kashi',]

  NaNames(control:FormControl){
        
    if(this.notAllowedNames.indexOf(control.value) !== -1){
      return {'namesNotAllowed':true};
    }
    return null;
  }


  // custom AsyncValidator (Email)

  NaEmails(control:FormControl): Promise<any>  | Observable<any> {
        const myResponse = new Promise<any> ((resolve,reject) => {

          setTimeout(() => {
             if(control.value === 'kashi@gmail.com'){
             resolve({'emailNotAllowed':true});
                } else {
                  resolve(null);
               }
           },2000);
         })
      return myResponse;
    }

}
