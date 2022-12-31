import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/services/fruits.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  constructor(private _fruitsService : FruitsService) {  }

  fruitData=[];

  ngOnInit() {
    
    this._fruitsService.getFruitsData().subscribe(fruits=>{

      console.log(fruits);
      // this.fruitData.push(fruits)
     
       this.fruitData=fruits.hints;
       
    })
  }

  // getFruits(fName){
  // // let fUrl = this._fruitsService.fruitUrl+fName;
  // //    console.log(fUrl);
  //    this._fruitsService.myMethod(JSON.stringify('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr='+fName))

    
  // }
}
