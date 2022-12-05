import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorator-child-practice',
  templateUrl: './decorator-child-practice.component.html',
  styleUrls: ['./decorator-child-practice.component.css']
})
export class DecoratorChildPracticeComponent implements OnInit {

 @Input() transData:string;   // string PAss
 @Input() takeData:any[];     // array pass
 @Input() takeData1:any[]      // array pass
 @Input() empData:any={}        // Object pass
constructor(){}

  ngOnInit() {}

}
