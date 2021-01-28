import { Component, OnInit } from '@angular/core';

interface IBook {
  btitle: string;
  bauthor: string;
}

@Component({
  selector: 'app-movie-search-main',
  templateUrl: './movie-search-main.component.html',
  styleUrls: ['./movie-search-main.component.css']
})
export class MovieSearchMainComponent implements OnInit {
  myInput: IBook = {
    btitle: 'Book Title',
    bauthor: 'Book Author'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
