import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-directive',
  templateUrl: './ng-class-directive.component.html',
  styleUrls: ['./ng-class-directive.component.css']
})
export class NgClassDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cssApply=[
    'one',
    'four'
  ]

  person=[
    'sachin',
    'Sajid',
    'Sandip',
    'Ajay',
    'Kartik',
    'Pankaj'
  ]

  clickMe(){
    
    this.cssApply=['three','one', 'one','four','six']
  }
}
