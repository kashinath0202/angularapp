import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'


import { DemoFirstService } from './servicess/demo-first.service';
import { HttpAndObservableService } from './servicess/http-and-observable.service';
import { EmployeeDataService } from './servicess/employee-data.service';
import { HttpAndObservableSecondService } from './servicess/http-and-observable-second.service';
import { SubjectAndBehaviorSubjectService } from './servicess/subject-and-behavior-subject.service';
import { SingletonService } from './servicess/singleton.service';


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
import { AddRemoveAssignComponent } from './add-remove-assign/add-remove-assign.component';
import { DirectivePracticeComponent } from './directive-practice/directive-practice.component';
import { BindingComponent } from './binding/binding.component';
import { NgStyleDirectiveComponent } from './ng-style-directive/ng-style-directive.component';
import { NgClassDirectiveComponent } from './ng-class-directive/ng-class-directive.component';
import { DecoratorChildPracticeComponent } from './decorator-child-practice/decorator-child-practice.component';
import { DecoratorParentPracticeComponent } from './decorator-parent-practice/decorator-parent-practice.component';
import { OutputPracticeParentComponent } from './output-practice-parent/output-practice-parent.component';
import { OutputPracticeChildComponent } from './output-practice-child/output-practice-child.component';
import { LifeCycleHookChildComponent } from './life-cycle-hook-child/life-cycle-hook-child.component';
import { LifeCycleHookParentComponent } from './life-cycle-hook-parent/life-cycle-hook-parent.component';
import { FormsPracticeComponent } from './forms-practice/forms-practice.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { PracticeComponent } from './practice/practice.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TemplateDrivenFormPracticeComponent } from './template-driven-form-practice/template-driven-form-practice.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenAssignComponent } from './template-driven-assign/template-driven-assign.component';
import { TemplateFormMyComponent } from './template-form-my/template-form-my.component';
import { ReactiveFormMyComponent } from './reactive-form-my/reactive-form-my.component';
import { ServiceComponentOneComponent } from './service-component-one/service-component-one.component';
import { ServiceComponentTwoComponent } from './service-component-two/service-component-two.component';
import { HttpAndObservablesFirstComponent } from './http-and-observables-first/http-and-observables-first.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpAndObservablesSecondComponent } from './http-and-observables-second/http-and-observables-second.component';
import { SubjectAndBehaviorSubjectFirstComponent } from './subject-and-behavior-subject-first/subject-and-behavior-subject-first.component';
import { SubjectAndBehaviorSubjectSecondComponent } from './subject-and-behavior-subject-second/subject-and-behavior-subject-second.component';
import { SubjectAndBehaviorSubjectThirdComponent } from './subject-and-behavior-subject-third/subject-and-behavior-subject-third.component';
import { SubjectAndBehaviorSubjectFourthComponent } from './subject-and-behavior-subject-fourth/subject-and-behavior-subject-fourth.component';
import { SubjectAndBSubEmployeeFirstComponent } from './subject-and-bsub-employee-first/subject-and-bsub-employee-first.component';
import { SubjectAndBSubEmployeeSecondComponent } from './subject-and-bsub-employee-second/subject-and-bsub-employee-second.component';
import { ServiceSingletonFirstComponent } from './service-singleton-first/service-singleton-first.component';
import { ServiceSingletonSecondComponent } from './service-singleton-second/service-singleton-second.component';
import { SubjectAndBSubEmployeeThirdComponent } from './subject-and-bsub-employee-third/subject-and-bsub-employee-third.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CountPipe } from './customPipes/count.pipe';
import { FilterPipe } from './customPipes/filter.pipe';
import { CustomFilterPipeComponent } from './custom-filter-pipe/custom-filter-pipe.component';
import { CustomPipeAssignComponent } from './custom-pipe-assign/custom-pipe-assign.component';
import { MaleFemaleAssignPipe } from './customPipes/male-female-assign.pipe';




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
  AddRemoveAssignComponent,
  DirectivePracticeComponent,
  BindingComponent,
  NgStyleDirectiveComponent,
  NgClassDirectiveComponent,
  DecoratorChildPracticeComponent,
  DecoratorParentPracticeComponent,
  OutputPracticeParentComponent,
  OutputPracticeChildComponent,
  LifeCycleHookChildComponent,
  LifeCycleHookParentComponent,
  FormsPracticeComponent,
  TemplateFormComponent,
  PracticeComponent,
  TemplateDrivenFormComponent,
  TemplateDrivenFormPracticeComponent,
  ReactiveFormsComponent,
  TemplateDrivenAssignComponent,
  TemplateFormMyComponent,
  ReactiveFormMyComponent,
  ServiceComponentOneComponent,
  ServiceComponentTwoComponent,
  HttpAndObservablesFirstComponent,
  ReactiveFormComponent,
  HttpAndObservablesSecondComponent,
  SubjectAndBehaviorSubjectFirstComponent,
  SubjectAndBehaviorSubjectSecondComponent,
  SubjectAndBehaviorSubjectThirdComponent,
  SubjectAndBehaviorSubjectFourthComponent,
  SubjectAndBSubEmployeeFirstComponent,
  SubjectAndBSubEmployeeSecondComponent,
  ServiceSingletonFirstComponent,
  ServiceSingletonSecondComponent,
  SubjectAndBSubEmployeeThirdComponent,
  PipeDemoComponent,
  CountPipe,
  FilterPipe,
  CustomFilterPipeComponent,
  CustomPipeAssignComponent,
  MaleFemaleAssignPipe,
  ],



  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule                 // HttpClientModule 
  ],


  providers: [
    DemoFirstService,
    HttpAndObservableService,
    EmployeeDataService,
    HttpAndObservableSecondService,
    SubjectAndBehaviorSubjectService,
    SingletonService                        // Concept of Singleton Service same work different component (service is module level)
  ],


  
  bootstrap: [AppComponent]
})

export class AppModule { }
