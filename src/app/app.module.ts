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
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { CustomDireDirective } from './custom-dire.directive';
import { BindingPracticeComponent } from './binding-practice/binding-practice.component';
import { DecoratorParentComponent } from './decorator-parent/decorator-parent.component';
import { DecoratorChildComponent } from './decorator-child/decorator-child.component';
import { OutputDecoratorParentComponent } from './output-decorator-parent/output-decorator-parent.component';
import { OutputDecoratorChildComponent } from './output-decorator-child/output-decorator-child.component';
import { OnChangesHookComponent } from './on-changes-hook/on-changes-hook.component';
import { OnChangeHookParentComponent } from './on-change-hook-parent/on-change-hook-parent.component';
import { OnChangeParentComponent } from './on-change-parent/on-change-parent.component';
import { OnChangeChildComponent } from './on-change-child/on-change-child.component';





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
  DataBindingAssignComponent,
  NgIfDirectiveComponent,
  NgForDirectiveComponent,
  NgSwitchDirectiveComponent,
  StructuralDirectiveComponent,
  AttributeDirectiveComponent,
  CustomDireDirective,
  BindingPracticeComponent,
  DecoratorParentComponent,
  DecoratorChildComponent,
  OutputDecoratorParentComponent,
  OutputDecoratorChildComponent,
  OnChangesHookComponent,
  OnChangeHookParentComponent,
  OnChangeParentComponent,
  OnChangeChildComponent,
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
