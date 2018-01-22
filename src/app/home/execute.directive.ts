import { OnInit, Directive, ElementRef, HostListener, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appExecute]'
})
export class ExecuteDirective {
  private boxTextArr: any[] = ['0', 'X'];
  private componentRef: any = null;
  @Input('boxId') boxId: string;

  constructor(private el: ElementRef, private viewContainer: ViewContainerRef) { }

  @HostListener('click') onClick(){
  	if(!this.el.nativeElement.hasAttribute('isActive') && !this.componentRef.isComplete()){
	  	this.execute();
	}
  }

  ngOnInit(){
  	this.componentRef = (<any>this.viewContainer)._view.component;
  }

  execute(){
  	let figureTag = this.el.nativeElement.getElementsByTagName('figure')[0];
  	let textValue = this.getBoxText();
  	figureTag.innerHTML = textValue;
  	figureTag.style.fontSize = '40px';
  	figureTag.style.fontWeight = 'bolder';
  	figureTag.style.fontFamily = 'cursive';
  	this.el.nativeElement.setAttribute('isActive', 'true');

  	this.componentRef.setBoxItem(this.boxId, textValue);
  	this.componentRef.openSnackBar(this.componentRef.getDenPlayer(), '');
  	this.componentRef.checkCondition();
  	this.componentRef.changeDen();
  }
  getBoxText(){
  	this.componentRef.defaultCounter++;
  	return (this.componentRef.defaultCounter % 2 == 0)?this.boxTextArr[0]:this.boxTextArr[1];
  }



}
