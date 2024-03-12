import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterOutlet} from '@angular/router';
import {SignUpComponent} from "./components/user/sign-up/sign-up.component";
import {ToastrModule} from "ngx-toastr";
import {SignInComponent} from "./components/user/sign-in/sign-in.component";
import {SidebarComponent} from "./components/shared/sidebar/sidebar.component";
import {MatMomentDateModule} from "@angular/material-moment-adapter";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SignUpComponent, ToastrModule, SignInComponent, SidebarComponent,MatMomentDateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'readNrentUI';

  constructor(private router: Router) {
  }


  ngOnInit(): void {
    //this.router.navigateByUrl('sign-up'); // Başlangıçta 'sign-up' bileşenini yükle
  }
}
