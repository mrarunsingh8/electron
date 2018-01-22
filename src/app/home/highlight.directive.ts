import { Input, Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() defaultCounter: number;
  
  constructor(private elm: ElementRef) {  	
  }

  @HostListener('mouseenter') onMouseEnter(){
  	this.highlight('#8ebfd0');
  }
  @HostListener('mouseleave') onMouseLeave(){
  	this.highlight(null);
  }

  highlight(color: string){
  	this.elm.nativeElement.style.backgroundColor = color;
  }

}
