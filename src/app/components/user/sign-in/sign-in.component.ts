import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {UserService} from "../../../services/user/user.service";
import {ToastrService} from "ngx-toastr";
import {DataResponseModel} from "../../shared/response-models/data-response.model";
import {SignInResponseModel} from "./models/sign-in-response.model";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private toastr: ToastrService) {
    this.signInForm = this.fb.group({
      emailOrUsername: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn() {
    let signInResponse: DataResponseModel<SignInResponseModel>;
    if (this.signInForm.valid) {
      this.userService.signIn({
        emailOrUsername: this.signInForm.value.emailOrUsername,
        password: this.signInForm.value.password
      }).subscribe(response => {
        signInResponse = {
          message: response.message,
          success: response.success,
          data: response.data
        };
        if (signInResponse.success)
          this.toastr.success(signInResponse.message, "Success");
      }, error => {
        this.toastr.error(error.error.message, "Error");
      });
    } else
      this.toastr.error("form valid diil", "Error");

  }

}
