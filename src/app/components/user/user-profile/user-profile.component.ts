import {Component, OnInit} from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {LibraryComponent} from "./library/library.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {WallComponent} from "./wall/wall.component";
import {CommentsComponent} from "./comments/comments.component";
import {GoalsComponent} from "./goals/goals.component";
import {LibraryService} from "../../../services/library/library.service";
import {ReadingGoalModel} from "./models/reading-goal.model";
import {UserBookModel} from "./models/user-book-model";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    MatTabsModule,
    LibraryComponent,
    ReviewsComponent,
    WallComponent,
    CommentsComponent,
    GoalsComponent
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  readingGoals: ReadingGoalModel[];
  userBooks: UserBookModel[];

  constructor(private libraryService: LibraryService) {
  }


  ngOnInit() {
    this.getReadingGoals();
    this.getUserBooks();
  }

  getReadingGoals() {
    this.libraryService.getReadingGoals().subscribe(response => {
      this.readingGoals = response.data;
    })
  }

  getUserBooks() {
    this.libraryService.getUserBooks().subscribe(response => {
      this.userBooks = response.data;
    })
  }
}
