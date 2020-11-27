import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHelper]'
})
export class HelperDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { 
    let newContent = renderer.createText('From directive')
    renderer.appendChild(element.nativeElement, newContent)
  }
  
}
