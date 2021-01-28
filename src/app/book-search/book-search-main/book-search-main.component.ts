import {Component, OnInit,
  ViewChild, ViewChildren, QueryList,
  ElementRef } from '@angular/core';
import { SearchBoxComponent } from "../search-box/search-box.component";
import {HttpSupportService} from "../http-support.service";

@Component({
  selector: 'app-book-search-main',
  templateUrl: './book-search-main.component.html',
  styleUrls: ['./book-search-main.component.css']
})
export class BookSearchMainComponent implements OnInit {
  today = new Date();
  selectedValue = '';
  displayCategoryName = '';
  bookCaterory = [
    {value: 'all', viewValue: '국내외도서'},
    {value: 'country', viewValue: '국내도서'},
    {value: 'foreign', viewValue: '국외도서'}
  ];

  searchTitle = '';

  constructor(private httpSupportService:HttpSupportService) { }

  ngOnInit(): void {
  }

  changeValue(category: string): void {
    for(let element of this.bookCaterory ) {
      if(element.value == category) {
        this.displayCategoryName = element.viewValue;
      }
    }
  }

  changeTitleBar(searchInfo: {keyword : string, category: string}) : void {
    this.searchTitle = `${searchInfo.keyword} ( ${searchInfo.category} )`;
  }

  @ViewChild(SearchBoxComponent) searchComp: SearchBoxComponent;
  @ViewChildren(SearchBoxComponent) searchCompArr: QueryList<SearchBoxComponent>;

  clearCondition(): void {
    this.selectedValue = '';
    this.searchTitle = '';
/*
    @ViewChild를 사용할 경우
    this.searchComp._bookCategory = null;
    this.searchComp.keyword = null;
*/
    // @ViewChildren을 사용할 경우
    this.searchCompArr.toArray()[0]._bookCategory = '';
    this.searchCompArr.toArray()[0].keyword = '';
    this.httpSupportService.clearBooks();
  }

  @ViewChild('resultStatus') resultToolbar: ElementRef;

  changeDOM(): void {
    this.resultToolbar.nativeElement.onclick = function() {
      alert('DOM을 직접 제어할 수 있어요!!');
    };
    this.resultToolbar.nativeElement.innerHTML = "클릭해보세요!!";
  }
}
