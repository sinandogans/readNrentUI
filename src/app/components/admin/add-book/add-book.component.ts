import {Component} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {UserService} from "../../../services/user/user.service";
import {ToastrService} from "ngx-toastr";
import {MatIconModule} from "@angular/material/icon";


@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  addBookForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private toastr: ToastrService) {

    this.addBookForm = this.fb.group({
      password: ['', Validators.required]
    });
  }

  onSubmit() {

  }


}
