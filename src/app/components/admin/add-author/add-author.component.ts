import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {UserService} from "../../../services/user/user.service";
import {ToastrService} from "ngx-toastr";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {AuthorService} from "../../../services/author/author.service";
import {AddAuthorRequestModel} from "../../../services/author/models/add-author-request.model";
import {FileService} from "../../../services/shared/file/file.service";

@Component({
  selector: 'app-add-author',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule
  ],
  templateUrl: './add-author.component.html',
  styleUrl: './add-author.component.css'
})
export class AddAuthorComponent {
  addAuthorForm: FormGroup;
  file: File;

  constructor(private authorService: AuthorService,
              private fb: FormBuilder,
              private toastr: ToastrService,
              private fileService: FileService) {

    this.addAuthorForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      deathDate: ['',],
      about: ['',]
    });
  }

  onSubmit() {
    this.fileService.convertFileToBase64(this.file).then(value => {
      let requestModel: AddAuthorRequestModel =
        {
          firstName: this.addAuthorForm.value.firstName,
          lastName: this.addAuthorForm.value.lastName,
          birthDate: this.addAuthorForm.value.birthDate,
          deathDate: this.addAuthorForm.value.deathDate,
          about: this.addAuthorForm.value.about,
          photo: value
        };
      this.authorService.addAuthor(requestModel).subscribe(response => {
        console.log(response);
      });
    });
  }

  onFileSelected(event) {
    this.file = File = event.target.files[0];
  }
}
