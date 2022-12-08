import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signInForm(logForm:NgForm){

    console.log(logForm);
    
  }
  // id:boolean;
  // isAction:boolean;

  // takeAction(){
  //   if (this.id==true) {
  //     this.isAction==false
  //   }else{
  //     this.isAction==false
  //   }
  // }
}
