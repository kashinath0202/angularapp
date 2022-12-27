import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { ParameterizeRouterService } from '../servicess/parameterize-router.service';

@Component({
  selector: 'app-router-parameterize-demo',
  templateUrl: './router-parameterize-demo.component.html',
  styleUrls: ['./router-parameterize-demo.component.css']
})
export class RouterParameterizeDemoComponent implements OnInit {

  constructor(private _parameterizeRouterService : ParameterizeRouterService) { 
  }

  arrayData : Post[] = [];

  ngOnInit() {
        this._parameterizeRouterService.getUserData().subscribe(result=>{
             
                  this.arrayData = result;
                  console.log(this.arrayData);
                  
        })
  }

}
