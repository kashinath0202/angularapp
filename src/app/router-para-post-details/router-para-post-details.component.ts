import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParameterizeRouterService } from '../servicess/parameterize-router.service';

@Component({
  selector: 'app-router-para-post-details',
  templateUrl: './router-para-post-details.component.html',
  styleUrls: ['./router-para-post-details.component.css']
})
export class RouterParaPostDetailsComponent implements OnInit {

  constructor(private _parameterizeRouterService : ParameterizeRouterService,
              private _route : ActivatedRoute) { }

   allData=[]

  ngOnInit() {

    let id= this._route.snapshot.params['id']
     this._parameterizeRouterService.getPostIdData(id).subscribe(idData=>{
            
              console.log('Get data id',idData);
              this.allData.push(idData);
             
              //alert( JSON.stringify(idData))
              
     })
  }

  displayStyle = 'none'

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }

}
