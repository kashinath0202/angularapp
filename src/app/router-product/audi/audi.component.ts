import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.css']
})
export class AudiComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }
  clickOn(){
      this._router.navigate(['/cars'])
  }

}
