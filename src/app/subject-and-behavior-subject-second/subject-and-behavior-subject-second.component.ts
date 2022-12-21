import { Component, OnInit } from '@angular/core';
import { SubjectAndBehaviorSubjectService } from '../servicess/subject-and-behavior-subject.service';

@Component({
  selector: 'app-subject-and-behavior-subject-second',
  templateUrl: './subject-and-behavior-subject-second.component.html',
  styleUrls: ['./subject-and-behavior-subject-second.component.css']
})
export class SubjectAndBehaviorSubjectSecondComponent implements OnInit {

  userName; 
      
  constructor(private _subjectAndBehaviorSubjectService : SubjectAndBehaviorSubjectService) {
    this._subjectAndBehaviorSubjectService.userName.subscribe(getValue=>{
              
                      this.userName = getValue;
    })
  }
  ngOnInit() {
  
  }


  onClick(uName){
    console.log(uName.value);
      this._subjectAndBehaviorSubjectService.userName.next(uName.value)      
  }

}
