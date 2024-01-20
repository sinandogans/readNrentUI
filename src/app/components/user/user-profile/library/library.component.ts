import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserBookModel} from "../models/user-book-model";
import {MatListModule} from "@angular/material/list";
import {NgForOf, NgIf} from "@angular/common";
import {AuthorListModel} from "./models/author-list.model";
import {ReadType} from "../../../../services/library/models/ReadType";
import {Router} from "@angular/router";
import {ConversionService} from "../../../../services/shared/conversion/conversion.service";

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    MatListModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent implements OnInit, OnChanges {

  @Input() userBooks: UserBookModel[];
  readBooks: UserBookModel[];
  toBeReadBooks: UserBookModel[];
  likedBooks: UserBookModel[];
  authorList: AuthorListModel[];

  constructor(private router: Router,
              private conversionService: ConversionService) {
  }

  ngOnInit() {
    this.readBooks = [];
    this.toBeReadBooks = [];
    this.likedBooks = [];
    this.filterBooks();
    this.prepareAuthorList();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userBooks'] !== undefined) {
      this.prepareAuthorList();
      this.filterBooks();
    }
  }

  filterBooks() {
    this.readBooks = this.userBooks.filter(userBook => userBook.readType === ReadType.READ).reverse();
    this.toBeReadBooks = this.userBooks.filter(userBook => userBook.readType === ReadType.TO_BE_READ).reverse();
    this.likedBooks = this.userBooks.filter(userBook => userBook.liked).reverse();
  }

  prepareAuthorList() {
    if (this.userBooks === undefined)
      return null;
    let authorMap = new Map<number, AuthorListModel>();
    this.userBooks.forEach(userBook => {
      userBook.book.authors.forEach(author => {
        let mapValue = authorMap.get(author.id);
        if (mapValue === undefined)
          authorMap.set(author.id, {id: author.id, name: author.name, imagePath: author.imagePath, count: 1});
        else
          mapValue.count = mapValue.count + 1;
      })
    });
    this.authorList = [];
    authorMap.forEach((value, key) => this.authorList.push(value));
  }

  navigateToBook(bookId: number, name: string): void {
    this.router.navigate(['/book', bookId, this.conversionService.convertBookNameToPath(name)]);
  }
}
