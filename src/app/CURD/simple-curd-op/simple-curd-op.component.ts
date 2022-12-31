import { Component, OnInit } from '@angular/core';
import { SimpleCurdService } from 'src/app/services/simple-curd.service';

@Component({
  selector: 'app-simple-curd-op',
  templateUrl: './simple-curd-op.component.html',
  styleUrls: ['./simple-curd-op.component.css']
})
export class SimpleCurdOpComponent implements OnInit {

  constructor(private _simpleCurdService : SimpleCurdService) { }

  ngOnInit() {

    this._simpleCurdService.getAllData().subscribe(rse=>{

         console.log('simpleData',rse);
         
    })
  }

}
