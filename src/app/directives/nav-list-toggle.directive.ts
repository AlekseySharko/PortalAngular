import {Directive, ElementRef, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[classToggle]'
})
export class NavListToggleDirective {
  firstTime:boolean = false;
  @Input('classToggle') set toggleValue(value:boolean) {
    if(!this.toggleClass) return;
      this.toggle();
  }
  @Input() toggleClass:string = "";
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  toggle() {
    const hasClass = this.elementRef.nativeElement.classList.contains(this.toggleClass);
    if(hasClass) {
      this.renderer.removeClass(this.elementRef.nativeElement, this.toggleClass);
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, this.toggleClass);
    }
  }
}
