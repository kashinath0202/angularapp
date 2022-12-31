import { Component, OnInit } from '@angular/core';
import { BeveragesAndDessertsService } from 'src/app/services/beverages-and-desserts.service';

@Component({
  selector: 'app-get-api-beverages-and-desserts',
  templateUrl: './get-api-beverages-and-desserts.component.html',
  styleUrls: ['./get-api-beverages-and-desserts.component.css']
})
export class GetApiBeveragesAndDessertsComponent implements OnInit {

  constructor(private _beveragesAndDessertsService : BeveragesAndDessertsService) { }

  // data=[]

  ngOnInit() {

       this._beveragesAndDessertsService.getData().subscribe(result=>{
          console.log(result);
          //  this.data.push(result)
       })
  }

}
