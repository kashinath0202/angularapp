import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-page-not-found',
  templateUrl: './router-page-not-found.component.html',
  styleUrls: ['./router-page-not-found.component.css']
})
export class RouterPageNotFoundComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  backHome(){
     this._router.navigate(['/home'])
  }

}
