import { Component, Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RouterRegistrationFormComponent } from '../router-registration-form/router-registration-form.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<RouterRegistrationFormComponent>{
  
  canDeactivate(component:RouterRegistrationFormComponent):boolean{
   if(component.reactiveForm.dirty){
    return window.confirm('Tou have unsaved changes, Are you sure want to navigate?')
   }else{
    return true
   }
  }

  
}
