import { Component, OnInit } from '@angular/core';
import { CricketService } from 'src/app/services/cricket.service';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {

  constructor(private _cricketService : CricketService) { }

  cricketData=[];

  ngOnInit() {

    this._cricketService.getCricketData().subscribe(result=>{

             console.log('Get Cricket',result);
              this.cricketData.push(result)
    })
  }

}
