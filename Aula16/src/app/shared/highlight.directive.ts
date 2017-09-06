import { OnInit, Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  constructor() { }

  @HostListener('mouseenter') onMouseEnter(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = '#f05f63';

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}
