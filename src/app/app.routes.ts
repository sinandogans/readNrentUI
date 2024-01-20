  import {Routes} from '@angular/router';
import {SignInComponent} from "./components/user/sign-in/sign-in.component";
import {SignUpComponent} from "./components/user/sign-up/sign-up.component";
import {UserProfileComponent} from "./components/user/user-profile/user-profile.component";
import {AdminComponent} from "./components/admin/admin.component";
  import {BookComponent} from "./components/book/book.component";

export const routes: Routes = [
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'book/:id/:name', component: BookComponent}
];
