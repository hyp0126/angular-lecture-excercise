import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSearchMainComponent } from './book-search-main/book-search-main.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { DetailBoxComponent } from './detail-box/detail-box.component';
import { ListBoxComponent } from './list-box/list-box.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';

// 양방향 바인딩을 위한 FormsModule import
import { FormsModule } from '@angular/forms';

// COMPOSITION_BUFFER_MODE import
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HttpSupportService } from "../http-support.service";
import { BookPricePipe } from '../book-price.pipe';
@NgModule({
  declarations: [
    BookSearchMainComponent, 
    SearchBoxComponent, 
    ListBoxComponent, 
    DetailBoxComponent,
    BookPricePipe
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    {
      provide: COMPOSITION_BUFFER_MODE,
      useValue: false
    },
    {
      provide: HttpSupportService,    // 데이터 타입
      useClass: HttpSupportService    // 실제 객체를 생성하기 위해 필요한 class명
    },
  ]
})
export class BookSearchModule { }
