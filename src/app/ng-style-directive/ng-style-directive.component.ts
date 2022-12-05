import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-directive',
  templateUrl: './ng-style-directive.component.html',
  styleUrls: ['./ng-style-directive.component.css']
})
export class NgStyleDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Person:any[]=[
    {
      name:'Ajay',
     country:'India'
    },
    {
      name:'Pankaj',
     country:'USA'
    },
    {
      name:'Sajid',
     country:'Japan'
    },
    {
      name:'Sachin',
     country:'Shrilanka'
    },
    {
      name:'xyz',
     country:'India'
    },
    {
      name:'abc',
     country:'USA'
    },
    {
      name:'pqr',
     country:'Japan'
    },
    {
      name:'hgf',
     country:'Shrilanka'
    }
  ]

  applyColor(country){
    switch(country){
            case 'India':
            return 'green';
            case 'USA':
            return 'yellow';
            case 'Japan':
            return 'red';
            case 'Shrilanka':
            return 'pink'
    }
  }

//
isApply:false

exColor={
  'color':'blue',
  'background-color':'red'
}

myColor(){
  this.exColor['color']='yellow',
  this.exColor['background-color']='pink'
}

}
