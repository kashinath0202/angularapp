import { Component, OnInit } from '@angular/core';
import { SubjectAndBehaviorSubjectService } from '../servicess/subject-and-behavior-subject.service';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  getData;

  constructor(private _subjectAndBehaviorSubjectService : SubjectAndBehaviorSubjectService) {
   this.getData = this._subjectAndBehaviorSubjectService.userName; //Inbuilt Pipe using Async (do not using subscribe method)
   }

  ngOnInit() {
  }

  employee:any[]=[
    {id:'Emp.01',name:'Sachin', salary:50000,  dateOfBirth:'01/09/1998'},
    {id:'Emp.02',name:'Sandy', salary:6.07000, dateOfBirth:'02/07/1997'},
    {id:'Emp.03',name:'Akash', salary:6.9400, dateOfBirth:'01/09/2000'},
    {id:'Emp.03',name:'Nagesh', salary:60000, dateOfBirth:'01/09/2001'},
    {id:'Emp.03',name:'Prashant', salary:80000, dateOfBirth:'01/09/2005'}
  ]


   dateOfBirth = new Date(1997,6,2);
   todayDate = new Date (1997,6,2)


   name:string='Sachin';
   num:number=9096949202;
   greet:string='I am UI Developer';
}
