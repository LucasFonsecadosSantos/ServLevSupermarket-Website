import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomContainer]'
})
export class CustomContainerDirective {

  constructor(public el: ElementRef) {
    this.el.nativeElement.classList.add('w-100', 'd-flex', 'flex-column', 'px-5');
  }

}
