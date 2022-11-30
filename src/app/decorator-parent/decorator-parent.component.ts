import { Component, OnInit } from '@angular/core';
import { Mobiles } from '../models/mobiles';

@Component({
  selector: 'app-decorator-parent',
  templateUrl: './decorator-parent.component.html',
  styleUrls: ['./decorator-parent.component.css']
})
export class DecoratorParentComponent implements OnInit {

  constructor() { }

  info:string='I Am Front end Developer';

  //mobi:string='Mobiles';
  mobiles:Mobiles[]=[
  {srNo:1,mobileName:'OnePluse',ram:'12GB',externalMemory:'256GB',camera:'50px & 25px',prise:54000},
  {srNo:2,mobileName:'Vivo',ram:'8GB',externalMemory:'128GB',camera:'22px & 12px',prise:22000},
  {srNo:3,mobileName:'SamSung',ram:'8GB',externalMemory:'64GB',camera:'30px & 22px',prise:32000},
  {srNo:4,mobileName:'Oppo',ram:'12GB',externalMemory:'4GB',camera:'50px & 50px',prise:40000},
  {srNo:5,mobileName:'Nokia',ram:'8GB',externalMemory:'8GB',camera:'50px & 12px',prise:20000}
 ]

  ngOnInit() {
  }

hiii:string='Hii Good Morning'

//  @Output

allData:string[]=[];

onGetData(value){
  console.log(value);

  this.allData.push(value);
  
}

}
