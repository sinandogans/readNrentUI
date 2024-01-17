import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../../../services/user/user.service";
import {AddRoleRequestModel} from "../../../services/user/models/add-role-request.model";
import {MatSelectModule} from "@angular/material/select";
import {GetRolesResponseModel} from "../../../services/user/models/get-roles-response.model";
import {NgForOf} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-add-role',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgForOf,
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './add-role.component.html',
  styleUrl: './add-role.component.css'
})
export class AddRoleComponent implements OnInit {
  addRoleForm: FormGroup;
  assignRoleForm: FormGroup;

  roles: GetRolesResponseModel[];

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.addRoleForm = this.fb.group({
      role: ['', Validators.required]
    });

    this.assignRoleForm = this.fb.group({
      emailOrUsername: ['', Validators.required],
      role: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.userService.getRoles().subscribe(response => {
      this.roles = response.data;
    })
  }

  onSubmit() {
    let requestModel: AddRoleRequestModel = {role: this.addRoleForm.value.role};
    this.userService.addRole(requestModel).subscribe(response => {
      console.log(response);
    });
    this.addRoleForm.reset();
  }

  onSubmitAssign() {

  }
}
