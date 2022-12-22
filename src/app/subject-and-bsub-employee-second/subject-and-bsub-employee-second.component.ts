import { Component, OnInit } from '@angular/core';
import { Mobiles } from '../models/mobiles';
import { EmployeeDataService } from '../servicess/employee-data.service';

@Component({
  selector: 'app-subject-and-bsub-employee-second',
  templateUrl: './subject-and-bsub-employee-second.component.html',
  styleUrls: ['./subject-and-bsub-employee-second.component.css']
})
export class SubjectAndBSubEmployeeSecondComponent implements OnInit {

  constructor(private _employeeDataService : EmployeeDataService) {

    this._employeeDataService.mobileData.subscribe(getData=>{
           
            this.mobileData=[] = getData;
    })

 }

ngOnInit() {
}
 
mobileData=[];
  
mobiles:Mobiles[]=[
{srNo:1,mobileName:'HP',ram:'12GB',externalMemory:'256GB',camera:'50px & 25px',prise:100000},
{srNo:2,mobileName:'Lenovo',ram:'8GB',externalMemory:'128GB',camera:'22px & 12px',prise:100000},
{srNo:3,mobileName:'Dell',ram:'8GB',externalMemory:'64GB',camera:'30px & 22px',prise:100000},
{srNo:4,mobileName:'Apple',ram:'12GB',externalMemory:'4GB',camera:'50px & 50px',prise:100000},
{srNo:5,mobileName:'Alienware',ram:'8GB',externalMemory:'8GB',camera:'50px & 12px',prise:100000}
]

   onClick(){
    
    console.log(this.mobiles);
    
    this.mobileData = this.mobiles;
     this._employeeDataService.mobileData.next(this.mobiles)
  }

}
