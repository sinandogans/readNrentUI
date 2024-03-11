import {Component, OnInit} from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  isUserAdmin = false;
  isUserSignedIn = false;
  userProfilePhotoPath: string = "";

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.checkIsUserSignedIn();
    this.checkIsUserAdmin();
    this.setProfilePhotoPath();
    this.userService.userSignedInEvent.subscribe((eventData) => {
      this.checkIsUserAdmin();
      this.setProfilePhotoPath();
      this.isUserSignedIn = true;
    });
  }

  loadComponent(componentName: string): void {
    this.router.navigateByUrl(componentName);
  }

  setProfilePhotoPath(){
    this.userService.getUserDetails().subscribe(response=>{
      this.userProfilePhotoPath = response.data.profilePhotoPath;
    })
  }

  checkIsUserAdmin() {
    this.userService.isCurrentUserIsAdmin().subscribe(response => {
      this.isUserAdmin = response.data.admin;
    })
  }

  checkIsUserSignedIn() {
    this.userService.isUserSignedIn().subscribe(response => {
      this.isUserSignedIn = response.success;
    })
  }

  signOut() {
    this.userService.signOut();
    this.isUserSignedIn = false;
    this.isUserAdmin = false;
    this.router.navigate(['/sign-in']);
  }
}
