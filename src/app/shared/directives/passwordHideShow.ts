import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[passHideShow]'
})
export class passHideShowDirective {

  private _shown = false;

  constructor(private el: ElementRef) {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML = 'show';
    span.addEventListener('click', () => {
      this.toggle(span);
    });
    parent.appendChild(span);
  }

  toggle(span: HTMLElement) {
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.innerHTML = 'hide';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.innerHTML = 'show';
    }
  }
}