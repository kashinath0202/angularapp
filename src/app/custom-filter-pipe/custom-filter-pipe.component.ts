import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-filter-pipe',
  templateUrl: './custom-filter-pipe.component.html',
  styleUrls: ['./custom-filter-pipe.component.css']
})
export class CustomFilterPipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  productNameSearch:string='';

  products:any[]=[
    {'SrNo':'01','Pname':'Laptop','price':70000,'isAvailable':'YES'},
    {'SrNo':'02','Pname':'TV','price':80000,'isAvailable':'No'},
    {'SrNo':'03','Pname':'Mobile','price':50000,'isAvailable':'YES'},
    {'SrNo':'04','Pname':'AC','price':90000,'isAvailable':'NO'}
  ] 
  
}
