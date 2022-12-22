import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../servicess/employee-data.service';

@Component({
  selector: 'app-subject-and-bsub-employee-third',
  templateUrl: './subject-and-bsub-employee-third.component.html',
  styleUrls: ['./subject-and-bsub-employee-third.component.css']
})
export class SubjectAndBSubEmployeeThirdComponent implements OnInit {

  mobileData=[]

  constructor(private _employeeDataService : EmployeeDataService ) {
    this._employeeDataService.mobileData.subscribe(mobData=>{
      this.mobileData = mobData

    })
   }

  ngOnInit() {
  }
  
  empty:string='';

  onClick(){
    this.empty
  }

}
