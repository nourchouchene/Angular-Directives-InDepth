import { Directive, ElementRef, OnInit, Renderer2 ,HostListener } from '@angular/core';

@Directive({
  selector: '[appSuperHighlight]'
})
export class SuperHighlightDirective implements OnInit{

  constructor( private renderObject : Renderer2 , private   elementRef : ElementRef) { }


  ngOnInit(): void {
  }
  @HostListener('mouseenter')  MouseEvent(eventdata :Event) {
    this.renderObject.setStyle(this.elementRef.nativeElement, 'background-color' , 'grey' );

  }

  @HostListener('mouseleave')  MouseEvent2(eventdata :Event) {
    this.renderObject.setStyle(this.elementRef.nativeElement, 'background-color' , 'transparent');

  }
}
