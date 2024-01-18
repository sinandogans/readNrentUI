import {Component, OnInit} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {UserService} from "../../../services/user/user.service";
import {ToastrService} from "ngx-toastr";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {GetRolesResponseModel} from "../../../services/user/models/get-roles-response.model";
import {AddAuthorRequestModel} from "../../../services/author/models/add-author-request.model";
import {FileService} from "../../../services/shared/file/file.service";
import {GetCategoriesResponseModel} from "../../../services/book/models/get-categories-response.model";
import {BookService} from "../../../services/book/book.service";
import {AddBookRequestModel} from "../../../services/book/models/add-book-request.model";
import {AuthorService} from "../../../services/author/author.service";
import {GetAuthorsResponseModel} from "../../../services/author/models/get-authors-response.model";


@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatOptionModule,
    MatSelectModule,
    NgForOf
  ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;
  file: File;

  categories: GetCategoriesResponseModel[];
  authors: GetAuthorsResponseModel[];

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private bookService: BookService,
              private authorService: AuthorService,
              private fileService: FileService) {

    this.addBookForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      pages: ['', Validators.required],
      publisher: ['', Validators.required],
      publicationDate: [, Validators.required],
      category: [, Validators.required],
      authors: [[], Validators.required]
    });
  }

  ngOnInit() {
    this.bookService.getCategories().subscribe(response => {
      this.categories = response.data;
    });

    this.authorService.getAuthors().subscribe(response => {
      this.authors = response.data;
    });
  }

  onSubmit() {
    this.fileService.convertFileToBase64(this.file).then(value => {
      let requestModel: AddBookRequestModel =
        {
          name: this.addBookForm.value.name,
          description: this.addBookForm.value.description,
          pages: this.addBookForm.value.pages,
          publisher: this.addBookForm.value.publisher,
          publicationDate: this.addBookForm.value.publicationDate,
          photo: value,
          categoryId: this.addBookForm.value.category,
          authorIds: this.addBookForm.value.authors
        };
      this.bookService.addBook(requestModel).subscribe(response => {
        console.log(response);
      });
    });
  }

  onFileSelected(event) {
    this.file = File = event.target.files[0];
  }
}
