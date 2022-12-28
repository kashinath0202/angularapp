import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomBG]'
})
export class CustomBGDirective {

  constructor(private _elementRef : ElementRef , private _renderer2 : Renderer2) {

    _elementRef.nativeElement.style.backgroundColor = 'red';

    //_renderer2.setStyle(_elementRef.nativeElement,'backgroundColor','red')
   }

}
