import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookDetailModel} from "./models/book-detail.model";
import {BookService} from "../../services/book/book.service";
import {NgForOf} from "@angular/common";
import {CommentsComponent} from "../user/user-profile/comments/comments.component";
import {GoalsComponent} from "../user/user-profile/goals/goals.component";
import {LibraryComponent} from "../user/user-profile/library/library.component";
import {MatTabsModule} from "@angular/material/tabs";
import {ReviewsComponent} from "../user/user-profile/reviews/reviews.component";
import {WallComponent} from "../user/user-profile/wall/wall.component";
import {BookReviewsComponent} from "./book-reviews/book-reviews.component";
import {OverviewComponent} from "./overview/overview.component";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    NgForOf,
    CommentsComponent,
    GoalsComponent,
    LibraryComponent,
    MatTabsModule,
    ReviewsComponent,
    WallComponent,
    BookReviewsComponent,
    OverviewComponent
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
