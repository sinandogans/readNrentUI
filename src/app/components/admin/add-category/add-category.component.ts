import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {BookService} from "../../../services/book/book.service";
import {AddCategoryRequestModel} from "../../../services/book/models/add-category-request.model";

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  addCategoryForm: FormGroup;

  constructor(private bookService: BookService, private fb: FormBuilder) {
    this.addCategoryForm = this.fb.group({
      category: ['', Validators.required]
    });
  }

  onSubmit() {
    let requestModel: AddCategoryRequestModel = {name: this.addCategoryForm.value.category};
    this.bookService.addCategory(requestModel).subscribe(response => {
      console.log(response);
    });
    this.addCategoryForm.reset();
  }
}
