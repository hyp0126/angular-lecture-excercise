import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import {HttpSupportService} from "../http-support.service";
import { SelectionModel } from '@angular/cdk/collections';

interface IBook {
  bauthor: string;
  bdate: string;
  btranslator: string;
  bpublisher: string;
  btitle: string;
  bprice: number;
  bisbn: string;
  bimgurl: string;
}

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css'],
})
export class ListBoxComponent {

  displayedColumns = ['bisbn', 'btitle', 'bauthor', 'bprice'];
  dataSource: MatTableDataSource<IBook>;
  books: IBook[];

  // event 처리
  selection = new SelectionModel<IBook>(false, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private httpSupportService:HttpSupportService) {
    this.httpSupportService.updateBooks.subscribe(data => {
      this.books = data;
      this.dataSource = new MatTableDataSource<IBook>(this.books);
      this.dataSource.paginator = this.paginator;
    })
  }

  rowSelect(row:IBook) {
    this.selection.select(row);
    this.httpSupportService.updateSelectedBook.next(this.selection.selected[0]);
  }

  getData(): void {
    this.books = this.httpSupportService.getBooks();
    console.log(this.httpSupportService.getBooks());
    this.dataSource = new MatTableDataSource<IBook>(this.books);
    this.dataSource.paginator = this.paginator;
  }
}
