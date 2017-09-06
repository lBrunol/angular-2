import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = '#f0f';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = 'transparent';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() { 

  }

}
