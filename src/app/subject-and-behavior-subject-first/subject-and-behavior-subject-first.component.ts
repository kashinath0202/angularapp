import { Component, OnInit } from '@angular/core';
import { SubjectAndBehaviorSubjectService } from '../servicess/subject-and-behavior-subject.service';

@Component({
  selector: 'app-subject-and-behavior-subject-first',
  templateUrl: './subject-and-behavior-subject-first.component.html',
  styleUrls: ['./subject-and-behavior-subject-first.component.css']
})
export class SubjectAndBehaviorSubjectFirstComponent implements OnInit {

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
    // next method is used to send message to observable i.e userName
    this._subjectAndBehaviorSubjectService.userName.next(uName.value)
  }

}
