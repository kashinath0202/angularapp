import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

  constructor() { }

  isUserRights():boolean{
    return false
  }
}
