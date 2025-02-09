import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGradientBackground]',
  standalone: true,
})
export class GradientBackgroundDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const { clientX, clientY } = event;
    this.el.nativeElement.style.background = `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(41, 44, 50, 1), transparent 80%)`;
  }
}
