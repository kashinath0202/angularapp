import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDire]'
})
export class CustomDireDirective {

  constructor(private el:ElementRef,private render:Renderer2) {
    console.log('Custom Directive Apply')

    // el.nativeElement.style.backgroundColor = 'yellow';
    // el.nativeElement.style.display='none'
     
    render.setStyle(el.nativeElement,'backgroundColor','red')

   }

}
