import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})
export class DirectivePracticeComponent implements OnInit {

  constructor() { }

  showSecret:boolean=false;

  log =[]

  onToggle(){
    this.showSecret =!this.showSecret;
    this.log.push(this.log.length + 1)
  }

  ngOnInit() {
  }

}
