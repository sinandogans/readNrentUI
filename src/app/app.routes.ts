import {Routes} from '@angular/router';
import {SignInComponent} from "./components/user/sign-in/sign-in.component";
import {SignUpComponent} from "./components/user/sign-up/sign-up.component";

export const routes: Routes = [
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent}
];
