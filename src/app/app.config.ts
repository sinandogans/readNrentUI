import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {HttpClientModule} from "@angular/common/http";
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideToastr} from "ngx-toastr";
import {LocationStrategy} from "@angular/common";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    provideAnimations(),
    provideToastr(),
  ]
};
