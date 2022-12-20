import { Component, OnInit } from '@angular/core';
import { DemoFirstService } from '../servicess/demo-first.service';

@Component({
  selector: 'app-service-component-two',
  templateUrl: './service-component-two.component.html',
  styleUrls: ['./service-component-two.component.css']
})
export class ServiceComponentTwoComponent implements OnInit {

  constructor(private _demoService:DemoFirstService) { }

     pro={};          // create one empty object
    
  ngOnInit() {             
    
    this.pro = this._demoService.products;        // By access using Service
  }

  // onClick(){
  //   alert('ServiceComponentTwoComponent - Subscribed')
  // }

  onClick(){
    this._demoService.display();                 // By using Service
  }

}
