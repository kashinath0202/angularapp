import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maleFemaleAssign'
})
export class MaleFemaleAssignPipe implements PipeTransform {

  transform(name:string,gender:string): any {
    
        if(gender == 'Male')
        return  'Mr.'+name ;

        else

         return 'Mrs.'+name;
        
         
  }

}
