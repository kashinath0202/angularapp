import { Component} from '@angular/core';

@Component({
  selector: 'app-binding-practice',
  templateUrl: './binding-practice.component.html',
  styleUrls: ['./binding-practice.component.css']
})
export class BindingPracticeComponent {

  constructor() { }

  text:string='';

  eventHandling(event){
  let value = event.target.value;

  this.text=value;
  
  }

  textSize:number=30;

  setsize(operation){
    if(operation=='incr'){
      this.textSize += 1;
    }else{
      this.textSize -= 1;
    }
  }

  isColor='';

  setColor(event){

    let val = event.target.value;
  this.isColor=val;

  }

  
}
