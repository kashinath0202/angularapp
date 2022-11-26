import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { AlertComponent } from './warningAlert/warningAlert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ShowComponent } from './show/show.component';
import { StrIntrpolutionComponent } from './str-intrpolution/str-intrpolution.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DataBindingAssignComponent } from './data-binding-assign/data-binding-assign.component';


@NgModule({
  declarations: [
  AppComponent,
  ServerComponent,
  AlertComponent,
  SuccessAlertComponent,
  ShowComponent,
  StrIntrpolutionComponent,
  PropBindingComponent,
  EventBindingComponent,
  TwoWayBindingComponent,
  DataBindingAssignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }