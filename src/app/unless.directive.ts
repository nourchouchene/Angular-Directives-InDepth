import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless (condition : boolean) {

    if(condition) {
   
    this.ViewContent.createEmbeddedView(this.templateRef) ;
    } 
    else {
this.ViewContent.clear() ; 
    }


  }
  constructor(private ViewContent : ViewContainerRef , private templateRef : TemplateRef<any> ) { }

}
