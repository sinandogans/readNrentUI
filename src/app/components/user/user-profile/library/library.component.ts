import {AfterContentInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserBookModel} from "../models/user-book-model";
import {MatListModule} from "@angular/material/list";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    MatListModule,
    NgForOf
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent implements OnInit, OnChanges {

  @Input() userBooks: UserBookModel[];
  authorAndCountsArray: [string, number][];

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userBooks'] !== undefined)
      this.getAuthorsAndCounts();
  }


  getAuthorsAndCounts() {
    if (this.userBooks === undefined)
      return null;
    let authorAndCounts = new Map<string, number>();
    this.userBooks.forEach(userBook => {
      userBook.book.authors.forEach(author => {
        let mapValue = authorAndCounts.get(author.name);
        if (mapValue === undefined)
          authorAndCounts.set(author.name, 1);
        else
          authorAndCounts.set(author.name, mapValue + 1);
      })
    });
    this.authorAndCountsArray = Array.from(authorAndCounts).sort();
  }
}
