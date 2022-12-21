import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-my',
  templateUrl: './reactive-form-my.component.html',
  styleUrls: ['./reactive-form-my.component.css']
})
export class ReactiveFormMyComponent implements OnInit {

    

  constructor() { 
    this.employeeForm();                       // call employeeForm
  }

  
   
  genders=[                             // gender
    {id:'1',value:'Male'},
    {id:'2',value:'Female'},
  ]

 

  myReactiveForm:FormGroup;                     // 

  employeeForm(){
    this.myReactiveForm = new FormGroup({
 
      'userDetails':new FormGroup({                                                         // form Group
        'FirstName': new FormControl('',[Validators.required,Validators.minLength(2)]),
        'MiddleName': new FormControl('',[Validators.required,Validators.minLength(2)]),
        'LastName': new FormControl('',[Validators.required,Validators.minLength(2),])
    }),

      'userPersonalDetails':new FormGroup({                                                   // form Group
        'UserName': new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9]+@kashi.com")]),
        'Password': new FormControl('',[Validators.required]),
        'ConfirmPassword': new FormControl('',[Validators.required]),
        'EmailId': new FormControl('',[Validators.required,Validators.email]),
        'MobileNumber': new FormControl('',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])
      }),

       // form controls             // option age validation     //,Validators.pattern("[0-9]{2}$")         
      'age': new FormControl('',[Validators.required,this.userAge.bind(this)]),
      'DateOfBirth': new FormControl('',[Validators.required]),
      'Qualification': new FormControl('',[Validators.required]),
      'DeveloperRoll': new FormControl('Full Stack Developer',[Validators.required]),
      'State': new FormControl('Maharashtra',[Validators.required]),
      'PermanentAddress': new FormControl('',[Validators.required]),
      'City': new FormControl('',[Validators.required,this.NACity.bind(this)]),
      'PinCode': new FormControl('',[Validators.required]),

      'skills': new FormArray([                                                           // form Array
        new FormControl('',[Validators.required]),
      ])
    })
  }

  onSubmitForm(){                                                           // submit
    console.log(this.myReactiveForm);
  }

  onAddSkill(){                                 // add skill button
  (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null,Validators.required));
  
  }

  onRemove(){
    (<FormArray>this.myReactiveForm.get('skills')).removeAt(1)
  }

  
      // custom validations not accept City
      notAllowCity=['Solapur','Sangali','Satara','Kolhapur'];

      NACity(control:FormControl){
             
          if(this.notAllowCity.indexOf(control.value) !== -1){
             return {'notAllowedCityNames':true}
          }
          return null;
      }


      ngOnInit() {

        //   // SetValue

        // setTimeout(()=>{
        //        this.myReactiveForm.setValue({
        //         'userDetails':{
        //            'FirstName':'Kashinath',
        //            'MiddleName':'Gopal',
        //            'LastName':'Jeure'    
                   
        //            // In this Case Compulsory all controls values pass either error throw
        //         }
        //        })
        // },4000)


           // patchValue

       setTimeout(()=>{
           this.myReactiveForm.patchValue({
            'userDetails':{
                         'FirstName':'Kashinath',
                         'MiddleName':'Gopal',
                         'LastName':'Jeure'
            },
            'PermanentAddress':'Main Road Pune'
           })
       },3000)
      }



    // Age Validations in between 18 to 21 
    
    userAge(controls:FormControl){
      if(((controls.value < 18) || (controls.value > 21)) && controls.value !== ""){
        return {'userAgeAllowed':true};
      }
      return null;
    }
   
}
