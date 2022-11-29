import { Component} from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent  {


      // ngStyle

  colorFont='blue';

  alColor='red'

  isColor(){
    return this.alColor='yellow'
  }

  constructor() { 
    setTimeout(() => {
      return this.colorFont='red';
    },5000);
  }

          //ngClass

  people:any[] = [
    {
      "name": "Jack",
      "country": "UK"
    },
    {
      "name": "Sumit",
      "country": "USA"
    },
    {
      "name": "Anup",
      "country": "HK"
    },
    {
      "name": "coidemind",
      "country": "UK"
    },
    {
      "name": "Surya",
      "country": "USA"
    }
  ]

  

  

}
