import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSearchMainComponent } from './movie-search-main/movie-search-main.component';
import { ChildComponent } from './child/child.component'


@NgModule({
  declarations: [
    MovieSearchMainComponent,
    ChildComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MovieSearchModule { }
