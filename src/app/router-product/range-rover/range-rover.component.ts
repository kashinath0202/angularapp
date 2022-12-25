import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-range-rover',
  templateUrl: './range-rover.component.html',
  styleUrls: ['./range-rover.component.css']
})
export class RangeRoverComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }
  backToHome(){
     this._router.navigate(['/cars'])
  }

}
