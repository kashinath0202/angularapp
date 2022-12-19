import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDire]'
})
export class CustomDireDirective {

    // app-attribute-directive file implemeted

  constructor(private el:ElementRef,private render:Renderer2) {
    console.log('Custom Directive Apply')

    // el.nativeElement.style.backgroundColor = 'yellow';
    // el.nativeElement.style.display='none'
     
    render.setStyle(el.nativeElement,'backgroundColor','red')

   }

}
                   //AttributeDirectiveComponent  show the component