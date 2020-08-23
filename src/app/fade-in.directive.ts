import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(element)
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'transition', 'all 0.5s ease-in');
    this.renderer.setStyle(this.element.nativeElement, 'opacity', 0);

    setTimeout(() => {
      this.renderer.setStyle(this.element.nativeElement, 'opacity', 1);
    }, 100);
  }

}
