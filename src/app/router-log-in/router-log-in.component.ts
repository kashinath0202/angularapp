import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-log-in',
  templateUrl: './router-log-in.component.html',
  styleUrls: ['./router-log-in.component.css']
})
export class RouterLogInComponent implements OnInit {
       
  constructor(private _route : Router){
  }
 
    ngOnInit() {
 
    }

    msgWrong:boolean=false  


          checkValidation(uname,password){
              if(uname=='kashi' && password== 'kashi'){
                alert('You logIn Successful!')
                 this._route.navigate(['/cars'])
              }else
                  {
                    this.msgWrong=true
                    alert('The username or password  entered is incorrect.')
                  }
          }
}