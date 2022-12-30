import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveSecondService } from '../servicess/active-second.service';

@Component({
  selector: 'app-router-log-in',
  templateUrl: './router-log-in.component.html',
  styleUrls: ['./router-log-in.component.css']
})
export class RouterLogInComponent implements OnInit {
       
  constructor(private _route : Router,private _canActiveSecond : ActiveSecondService){
  }
 
    ngOnInit() {
 
    }

    msgWrong:boolean=false  

          checkValidation(uname,password){
        
         var result = this._canActiveSecond.checkUsernameAndPassword(uname,password)    // service DI
        
         if(result == true){
          alert('You logIn Successful!')
          this._route.navigate(['/aboutUs'])
         }else{
                 this.msgWrong=true
             alert('The username or password  entered is incorrect.')
             return false
         }


              // if(uname=='kashi' && password== 'kashi'){
              //   alert('You logIn Successful!')
              //    this._route.navigate(['/cars'])
              // }else
              //     {
              //       this.msgWrong=true
              //       alert('The username or password  entered is incorrect.')
              //     }
          }
}