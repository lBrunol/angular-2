import { Directive, ElementRef, OnInit, Input, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[unmask]'
})
export class UnmaskDirective implements OnInit, OnDestroy {

 @Input('unmask') unmaskFunction: Function;
  private subscriber;
  constructor(private elementRef: ElementRef, private model: NgControl) { }

  ngOnInit(): void {
    this.subscriber = this.model.control.valueChanges.subscribe(() => {
			const newValue = this.unmaskFunction(this.elementRef.nativeElement.value);
      this.model.control.setValue(newValue, {
        emitEvent: false,
        emitModelToViewChange: false,
        emitViewToModelChange: false
      });
    });
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
