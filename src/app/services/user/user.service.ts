import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignUpRequestModel} from "../../components/user/sign-up/models/sign-up-request.model";
import {SignInRequestModel} from "../../components/user/sign-in/models/sign-in-request.model";
import {DataResponseModel} from "../../components/shared/response-models/data-response.model";
import {SignInResponseModel} from "../../components/user/sign-in/models/sign-in-response.model";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "http://localhost:8080/users";

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
  }


  signUp(signUpRequestModel: SignUpRequestModel): void {
    this.checkIfPasswordsSame(signUpRequestModel);
    this.httpClient.post(this.baseUrl + "/register", signUpRequestModel).subscribe(response => {
      console.log(response);
    });
  }

  checkIfPasswordsSame(signUpRequestModel: SignUpRequestModel): void {
    if (signUpRequestModel.password !== signUpRequestModel.passwordConfirmation)
      throw new Error();
  }

  signIn(signInRequestModel: SignInRequestModel): Observable<DataResponseModel<SignInResponseModel>> {
    let response = this.httpClient.post<any>(this.baseUrl + "/login", signInRequestModel);
    this.setJwtCookie(response);
    return response;
  }

  setJwtCookie(observable: Observable<DataResponseModel<SignInResponseModel>>) {
    observable.subscribe(response => {
      this.cookieService.set("jwtToken", response.data.jwtToken);
    });
  }
}
