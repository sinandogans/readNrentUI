import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookDetailModel} from "./models/book-detail.model";
import {BookService} from "../../services/book/book.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  bookId: number;
  book: BookDetailModel;

  constructor(private route: ActivatedRoute,
              private bookService: BookService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.bookId = +params.get('id');
    });
    this.bookService.getBookDetail(this.bookId).subscribe(response => {
      this.book = response.data;
      console.log(response);
    })
  }
}
