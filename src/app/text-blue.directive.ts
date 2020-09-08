import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[textBlue]'
})
export class TextBlueDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter') handleMouseEnter(): void {
    this.textColor('blue');
  }

  @HostListener('mouseleave') handleMouseLeave(): void {
    this.textColor('red');
  }

  private textColor(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
