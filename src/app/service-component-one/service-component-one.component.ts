import { Component, OnInit } from '@angular/core';
import { DemoFirstService } from '../servicess/demo-first.service';

@Component({
  selector: 'app-service-component-one',
  templateUrl: './service-component-one.component.html',
  styleUrls: ['./service-component-one.component.css']
})
export class ServiceComponentOneComponent implements OnInit {

  constructor(private _demoService:DemoFirstService) { }

    product={};      // create one empty object

  ngOnInit() {
           this.product = this._demoService.products       // By access using Service
  }

  // onClick(){
  //   alert('ServiceComponentOneComponent - Subscribed')            
  // }

  onClick(){
    this._demoService.display();                         // By access using Service
  }

   

}
