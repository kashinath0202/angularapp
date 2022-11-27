import { Component, OnInit } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';
import { Mobiles } from '../models/mobiles';


@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {

  // *ngIf Practice
  isShow:boolean=false;

  information:string;

  show(){
    return this.information= 'Structural directives are directives which change the DOM layout by adding and removing DOM elements.';
  }

  isHide:boolean=true;

  defination:string;

  showInfo(){
     return this.defination ='When structural directives are applied they generally are prefixed by an asterisk, *, such as *ngIf. This convention is shorthand that Angular interprets and converts into a longer form. Angular transforms the asterisk in front of a structural directive into an <ng-template> that surrounds the host element and its descendants.'
  }


  // *ngFor Practice

  mobi:string='Mobiles';
  mobiles:Mobiles[]=[
  {srNo:1,mobileName:'OnePluse',ram:'12GB',externalMemory:'256GB',camera:'50px & 25px',prise:54000},
  {srNo:2,mobileName:'Vivo',ram:'8GB',externalMemory:'128GB',camera:'22px & 12px',prise:22000},
  {srNo:3,mobileName:'SamSung',ram:'8GB',externalMemory:'64GB',camera:'30px & 22px',prise:32000},
  {srNo:4,mobileName:'Oppo',ram:'12GB',externalMemory:'4GB',camera:'50px & 50px',prise:40000},
  {srNo:5,mobileName:'Nokia',ram:'8GB',externalMemory:'8GB',camera:'50px & 12px',prise:20000}
 ]


  // *ngSwitch Practice

  selectName:string;

  getMe(value){
    console.log(value.target.value);
    this.selectName = value.target.value;
  }

  constructor() { }

  

}
