import { Component, OnInit } from '@angular/core';
import { SubjectAndBehaviorSubjectService } from '../servicess/subject-and-behavior-subject.service';

@Component({
  selector: 'app-subject-and-behavior-subject-fourth',
  templateUrl: './subject-and-behavior-subject-fourth.component.html',
  styleUrls: ['./subject-and-behavior-subject-fourth.component.css']
})
export class SubjectAndBehaviorSubjectFourthComponent implements OnInit {

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
