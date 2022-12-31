import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RouteGuardFiveComponent } from './route-guard-five/route-guard-five.component';
import { RouteGuardFourComponent } from './route-guard-four/route-guard-four.component';
import { RouteGuardOneComponent } from './route-guard-one/route-guard-one.component';
import { RouteGuardThreeComponent } from './route-guard-three/route-guard-three.component';
import { ActiveSecondGuard } from './routeGuard/active-second.guard';
import { DeactivateGuard } from './routeGuard/deactivate.guard';

import { RouterContactUsComponent } from './router-contact-us/router-contact-us.component';
import { RouterLogInComponent } from './router-log-in/router-log-in.component';
import { RouterParaPostDetailsComponent } from './router-para-post-details/router-para-post-details.component';
import { RouterParameterizeDemoComponent } from './router-parameterize-demo/router-parameterize-demo.component';
import { RouterRegistrationFormComponent } from './router-registration-form/router-registration-form.component';
import { CustomPreloadingService } from './servicess/custom-preloading.service';

 
const routes: Routes = [
  {path:'', redirectTo:'logIn', pathMatch:'full'},        // it should be first component
  {path:'logIn', component:RouterLogInComponent},
  {path:'home',data:{preload:true}, loadChildren:'./router-home/home.module#HomeModule'},          // Using Lazy Loading & custom Preloading (data:{preloading:true}) 
  {path:'aboutUs',loadChildren:'./router-about-us/about.module#AboutModule'},  // Using Lazy Loading && & canActiveGuard
  {path:'contactUs', component:RouterContactUsComponent}, 
  // {path:'cars',                // Move to Feature Module                                  //localhost:4200/cars
  //               children:[
  //                 {path:'',component:RouterProductComponent},           //localhost:4200/cars
  //                 {path:'rollsRoyce',component:RollsRoyceComponent},     //localhost:4200/cars/rollsRoyce
  //                 {path:'rangeRove',component:RangeRoverComponent},     //localhost:4200/cars/rangeRove
  //                 {path:'audi',component:AudiComponent},                //localhost:4200/cars/audi
  //                 {path:'fortuner',component:FortunerComponent}         //localhost:4200/cars/fortuner
  //               ]},

  // path & loadChildren Property & fileName & module.name & # % ModuleName
  {path:'cars',data:{preload:true},loadChildren:'./router-product/product.module#ProductModule'},  // Using Lazy Loading & custom Preloading (data:{preloading:true})
  {path:'posts',component:RouterParameterizeDemoComponent},             //localhost:4200/posts    
  {path:'postDetails/:id',component:RouterParaPostDetailsComponent},
  {path:'service',loadChildren:'./routerLoading/service.module#ServiceModule'},          // Using Lazy Loading
  {path:'canActive',component:RouteGuardOneComponent,canActivate:[ActiveSecondGuard]},            // canActive Route Guard              
  {path:'registrationForm',component:RouterRegistrationFormComponent,canDeactivate:[DeactivateGuard]},
  {path:'canActiveChild',component:RouteGuardThreeComponent}, 
  {path:'resolve',component:RouteGuardFourComponent}, 
  {path:'canLoad',component:RouteGuardFiveComponent}, 
  
  // {path:'**', component:RouterPageNotFoundComponent}                    //wild card route  It should be last component
];

@NgModule({
                            //,{preloadingStrategy:PreloadAllModules}  use PreLoading Syntax     
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:CustomPreloadingService}), // This is custom preloading using Service(CustomPreloadingService)
            //  AboutModule,
            //  ServiceModule   // Because of use lazy loading
   ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log('Router Module call');
    
  }
 }
