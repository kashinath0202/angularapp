import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectAndBehaviorSubjectService {


  // userName = new Subject<any>();    // create one property  observable (subject)  & we can do not set of default value

  userName = new BehaviorSubject('I am  Angular Developer');    // we can  set of default value.

  constructor() { }
}
