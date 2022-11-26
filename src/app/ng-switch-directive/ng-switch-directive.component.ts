import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directive',
  templateUrl: './ng-switch-directive.component.html',
  styleUrls: ['./ng-switch-directive.component.css']
})
export class NgSwitchDirectiveComponent implements OnInit {

  // selectedProduct: string;


  // getProductValue(value) {
  //   console.log(value.target.value);
  //   this.selectedProduct = value.target.value;


    selectedProduct: string;


  getProductValue(value) {
    console.log(value.target.value);
    this.selectedProduct = value.target.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
