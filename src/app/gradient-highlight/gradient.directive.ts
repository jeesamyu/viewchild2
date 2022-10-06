import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGradient]'
})
export class GradientDirective {

  rightcolor:string = 'red';
  leftcolor:string = 'green';

  constructor(private element : ElementRef) { }

  highlight(){
    this.element.nativeElement.style.backgroundImage = `linear-gradient(to right , ${this.rightcolor}, ${this.leftcolor})`
  }

}
