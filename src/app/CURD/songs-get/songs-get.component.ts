import { Component, OnInit } from '@angular/core';
import { SongsGetService } from 'src/app/services/songs-get.service';

@Component({
  selector: 'app-songs-get',
  templateUrl: './songs-get.component.html',
  styleUrls: ['./songs-get.component.css']
})
export class SongsGetComponent implements OnInit {

  
   songsData=[];  

  constructor(private _songsGetService : SongsGetService) { }

  ngOnInit() {
    this._songsGetService.getSongs().subscribe(songs=>{
            console.log(songs);
            this.songsData.push(songs);    
    })
  }
}
