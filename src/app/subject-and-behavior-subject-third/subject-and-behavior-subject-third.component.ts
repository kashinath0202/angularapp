import { Component, OnInit } from '@angular/core';
import { SubjectAndBehaviorSubjectService } from '../servicess/subject-and-behavior-subject.service';

@Component({
  selector: 'app-subject-and-behavior-subject-third',
  templateUrl: './subject-and-behavior-subject-third.component.html',
  styleUrls: ['./subject-and-behavior-subject-third.component.css']
})
export class SubjectAndBehaviorSubjectThirdComponent implements OnInit {
 
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
