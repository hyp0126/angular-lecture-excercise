import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, 
  Component, DoCheck, Input, OnChanges, OnDestroy, OnInit,
  SimpleChanges
} from '@angular/core';

interface IBook {
  btitle: string;
  bauthor: string;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() myInput: IBook;
  myString = 'Hello';

  constructor() {
    console.log(`Constructor 호출!! => myInput : ${this.myInput}`);
    console.log(`Constructor 호출!! => myString : ${this.myString}`);
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log(`ngOnChanges 호출!! => myInput : ${this.myInput}`);
    console.log(simpleChanges.myInput.previousValue);
    console.log(simpleChanges.myInput.currentValue);
  }

  ngOnInit() {
    console.log(`ngOnInit 호출!! => myInput : ${this.myInput}`);
    console.log(`ngOnInit 호출!! => myString : ${this.myString}`);
  }

  ngDoCheck() {
    console.log(`ngDoCheck 호출!! => myInput : ${this.myInput}`);
    console.log(`ngDoCheck 호출!! => myString : ${this.myString}`);
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit 호출!!`);
  }

  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked 호출!!`);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit 호출!!`);
  }

  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked 호출!!`);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy 호출!!`);
  }
}