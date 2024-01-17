import { Component } from '@angular/core';
import {CommentsComponent} from "../user/user-profile/comments/comments.component";
import {GoalsComponent} from "../user/user-profile/goals/goals.component";
import {LibraryComponent} from "../user/user-profile/library/library.component";
import {MatTabsModule} from "@angular/material/tabs";
import {ReviewsComponent} from "../user/user-profile/reviews/reviews.component";
import {WallComponent} from "../user/user-profile/wall/wall.component";
import {AddBookComponent} from "./add-book/add-book.component";
import {AddAuthorComponent} from "./add-author/add-author.component";
import {AddCategoryComponent} from "./add-category/add-category.component";
import {AddRoleComponent} from "./add-role/add-role.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommentsComponent,
    GoalsComponent,
    LibraryComponent,
    MatTabsModule,
    ReviewsComponent,
    WallComponent,
    AddBookComponent,
    AddAuthorComponent,
    AddCategoryComponent,
    AddRoleComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
