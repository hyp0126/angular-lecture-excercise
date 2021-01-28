import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// BrowserAnimationsModule import 구문 추가
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material Table Component 사용을 위한 MatTableModule import
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

// Feature Module import
import { BookSearchModule } from "./book-search/book-search.module";
import { MovieSearchModule } from "./movie-search/movie-search.module";

// Routing Module import
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { TextColorDirective } from './text-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextColorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  // BrowserAnimationsModule 추가
    MatTableModule,            // MatTableModule 추가
    AppRoutingModule,
    BookSearchModule,
    MovieSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
