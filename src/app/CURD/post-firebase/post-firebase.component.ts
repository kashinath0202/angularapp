import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-post-firebase',
  templateUrl: './post-firebase.component.html',
  styleUrls: ['./post-firebase.component.css']
})
export class PostFirebaseComponent implements OnInit {

  constructor(private _firebaseService : FirebaseService) { }

  ngOnInit() {
   
  }


  onClick(){
    this._firebaseService.createPost().subscribe(result=>{
      console.log(result);
  })
  }

  deletePost(index){
    this._firebaseService.DeletePostData(index=1).subscribe(del=>{
      console.log('Delete Post Data from Firebase',del);
      
    })
  }

}
