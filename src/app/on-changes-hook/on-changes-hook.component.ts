import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes-hook',
  templateUrl: './on-changes-hook.component.html',
  styleUrls: ['./on-changes-hook.component.css']
})
export class OnChangesHookComponent implements OnInit, OnChanges {

  @Input() userId:number; 

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Hook Component ngOnChanges Invoked');

for (const userId in changes) {

  const allName = changes[userId];

  const{previousValue,currentValue,firstChange}=allName

  console.log(`Prop Name :-${userId}`);
  console.log(`Previous Value :-${previousValue}`);
  console.log(`Current Value :- ${currentValue}`);
  console.log(`First Change :- ${firstChange}`);
  console.log('********************************');
  
}
 
  }

  ngOnInit() {
  }

}
