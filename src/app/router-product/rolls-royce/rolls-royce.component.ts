import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rolls-royce',
  templateUrl: './rolls-royce.component.html',
  styleUrls: ['./rolls-royce.component.css']
})
export class RollsRoyceComponent implements OnInit {

  constructor(private _route : Router) { }

  ngOnInit() {
  }
  backToHome(){
        this._route.navigate(['/cars'])
  }

}
