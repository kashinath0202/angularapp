import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-decorator-child',
  templateUrl: './decorator-child.component.html',
  styleUrls: ['./decorator-child.component.css']
})
export class DecoratorChildComponent implements OnInit {

  
  
    // @Input Example

  @Input() name:string;
  @Input() allMobile:[];
  @Input()greet:string;

  @Output() dataEvent:EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { 
    
  }

  ngOnInit() {

     console.log("I Am Parent component",this.name);
     console.table(this.allMobile);
     console.log('I am Parent Component',this.greet);
     
  }


  

    // @Output Example

    // Method Call when user enter data

    callMe(value){
    
    this.dataEvent.emit(value);

  }
    

}
