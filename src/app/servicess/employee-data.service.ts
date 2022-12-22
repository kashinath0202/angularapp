import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {


   mobileData = new Subject<any>();

  constructor() { }
}
