import {AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[titleColor]'
})
export class TitleColorDirective implements AfterViewInit {
  @Input() color: string = 'blue';

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.setTextColor(this.color);
  }

  private setTextColor(color:string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setTextColor('purple');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setTextColor(this.color);
  }

  @HostListener('click') onClick() {
    this.color = 'purple';
  }

}
