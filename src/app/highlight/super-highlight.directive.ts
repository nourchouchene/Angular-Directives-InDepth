import { Directive, ElementRef, OnInit, Renderer2 ,HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSuperHighlight]'
})
export class SuperHighlightDirective implements OnInit{
  @Input() DefaultColor : string ='black';
  @Input() HighlightColor : string ;
  @HostBinding('style.backgroundColor') background : string = this.DefaultColor ;
  constructor( private renderObject : Renderer2 , private   elementRef : ElementRef) { }


  ngOnInit(): void {
  }
  @HostListener('mouseenter')  MouseEvent(eventdata :Event) {
    // this.renderObject.setStyle(this.elementRef.nativeElement, 'background-color' , 'grey' );
        this.background=this.HighlightColor ; 
  }

  @HostListener('mouseleave')  MouseEvent2(eventdata :Event) {
    this.renderObject.setStyle(this.elementRef.nativeElement, 'background-color' , 'transparent');
    this.background=this.DefaultColor ; 

  }
}
