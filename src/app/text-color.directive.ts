import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[myColor]'
})
export class TextColorDirective {
  @HostListener('click', ['$event']) elementClick(e:any) {
    // e안에는 event객체가 들어온다.
    // this는 directive 객체를 지칭.
    alert(e.srcElement.innerHTML)
  }

  constructor(elementref: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elementref.nativeElement,'color','darkred');
  }

}
