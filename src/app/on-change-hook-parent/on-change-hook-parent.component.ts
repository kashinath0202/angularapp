import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-change-hook-parent',
  templateUrl: './on-change-hook-parent.component.html',
  styleUrls: ['./on-change-hook-parent.component.css']
})
export class OnChangeHookParentComponent implements OnInit {

    public uid:number;

  constructor() { }

  ngOnInit() {
  }

}
