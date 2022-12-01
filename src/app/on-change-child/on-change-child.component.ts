import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-change-child',
  templateUrl: './on-change-child.component.html',
  styleUrls: ['./on-change-child.component.css']
})
export class OnChangeChildComponent implements OnInit, OnChanges {
   @Input() allEmployeeData:any

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
   console.log('In Every Time ngOnChanges Invoked');
   
      for (const allEmployeeData in changes) {
        
        const allData =changes[allEmployeeData]
        const{previousValue,currentValue,firstChange}=allData

        console.log('Employee Name :-', allEmployeeData);
        console.log('Previous Name :-',previousValue);
        console.log('Current Name :-' , currentValue);
        console.log('First Change :- ', firstChange);
        console.log('********************************');

      }

  }

  ngOnInit() {
  }

}
