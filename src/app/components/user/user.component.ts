import {Component} from '@angular/core';
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(private userService: UserService) {
  }
}
