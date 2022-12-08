import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-practice',
  templateUrl: './forms-practice.component.html',
  styleUrls: ['./forms-practice.component.css']
})
export class FormsPracticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  register(regForm:NgForm){
  //   debugger
  // console.log(regForm.value["first Name"]);
  // console.log(regForm.value["last Name"]);
  // console.log(regForm.value["email Address"]);
    
    console.log(regForm);

  }

}
