import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fortuner',
  templateUrl: './fortuner.component.html',
  styleUrls: ['./fortuner.component.css']
})
export class FortunerComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }
  backToHome(){
      this._router.navigate(['/cars'])
  }

}
