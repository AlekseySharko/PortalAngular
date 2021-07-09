import {Directive, ElementRef, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[classToggle]'
})
export class NavListToggleDirective {
  private toggleStatus!:boolean;
  @Input('classToggle') set toggleValue(value:boolean) {
    if(!this.toggleClass) return;
    if(this.toggleStatus == undefined) {
      this.toggleStatus = value;
      this.toggle();
      return;
    }
    if(value != this.toggleStatus) {
      this.toggle();
      this.toggleStatus = value;
    }
  }
  @Input() toggleClass:string = "";
  constructor(private elementRef: ElementRef) { }

  toggle() {
    const hasClass = this.elementRef.nativeElement.classList.toggle(this.toggleClass);
  }
}
