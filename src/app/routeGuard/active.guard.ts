import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Routes, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActiveService } from '../servicess/active.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivate {
  
     constructor(private _activeService : ActiveService,
                 private _routes : Router){

     }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._activeService.isUserRights()){
       return false;
    }else{
      alert('You do not have permission to this page, redirect to login page');
       this._routes.navigate(['logIn'])
    }
  }
  
}
