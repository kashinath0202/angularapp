import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private _fb:FormBuilder) {
         this.myCreateForm()
   }

  ngOnInit() {
  }

  genders=[
    {'id':'1',value:'Male'},
    {'id':'2',value:'Female'}
  ]

  onSubmit(){
   console.log(this.projectForm);
    
  }
      
  projectForm:FormGroup;
       
       myCreateForm(){
        this.projectForm = this._fb.group({
           userDetail: this._fb.group({
            firstName : [null,Validators.required],
            lastName : [null,Validators.required]
           }),

           Gender: ['Male',Validators.required],
           dateOfBirth : [null,Validators.required],
           emailID : [null,Validators.email],
           projectName :[null,this.NAProName.bind(this)],
           projectStatus :  ['Stable',Validators.required]

        })
       }
    

       notAllowProName=['Test', 'kashi'];

       NAProName(control:FormControl){
      
           if(this.notAllowProName.indexOf(control.value) !==-1){
            return {'notAllow':true}
           }
           return null;
       }
}
