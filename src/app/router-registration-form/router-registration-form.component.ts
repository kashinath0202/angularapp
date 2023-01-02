import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { FirebasePost } from '../models/firebase';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-router-registration-form',
  templateUrl: './router-registration-form.component.html',
  styleUrls: ['./router-registration-form.component.css']
})
export class RouterRegistrationFormComponent implements OnInit {

  reactiveForm:FormGroup
  FormGroup: any;

  constructor(private _firebaseService : FirebaseService) {   // using post
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

  firebaseClass : FirebasePost // class property  (Post CURD)

  onSubmit(){
    console.log(this.reactiveForm);    
    this.firebaseClass = new FirebasePost             // instance of object (Post CURD)
    this.firebaseClass.userName = this.reactiveForm['controls'].userName.value;
    this.firebaseClass.email = this.reactiveForm['controls'].email.value;
    this.firebaseClass.course = this.reactiveForm['controls'].course.value;
    this.firebaseClass.Gender = this.reactiveForm['controls'].Gender.value;
    this.firebaseClass.paramentAddress = this.reactiveForm['controls'].addressDetails['controls'].paramentAddress.value
    this.firebaseClass.pinCode = this.reactiveForm['controls'].addressDetails['controls'].pinCode.value
    //  console.log('formData',this.firebaseClass);
     
     this._firebaseService.postReactiveForm(this.firebaseClass).subscribe(postData=>{
             
             console.log('Post Data from Firebase',postData);
     })
  }

  formData=[];
  getData(){                                // Get Data On Firebase
    this._firebaseService.getPostDataFirebase().subscribe(getForm=>{
      console.log('Get Data from Firebase',getForm);
        this.formData.push(getForm)           
   })
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
