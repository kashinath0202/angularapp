import { Component, OnInit } from '@angular/core';
import { DeletePostService } from 'src/app/services/delete-post.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {

  constructor(private _deletePostService : DeletePostService) { }

  ngOnInit() {
    
  }

  deletePost(){
    this._deletePostService.deletePostId(1).subscribe(result=>{
         console.log(result);
         
    })
  }

}
