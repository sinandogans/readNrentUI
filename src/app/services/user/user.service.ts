import {EventEmitter, Injectable, OnDestroy} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SignUpRequestModel} from "../../components/user/sign-up/models/sign-up-request.model";
import {SignInRequestModel} from "../../components/user/sign-in/models/sign-in-request.model";
import {DataResponseModel} from "../../components/shared/response-models/data-response.model";
import {SignInResponseModel} from "../../components/user/sign-in/models/sign-in-response.model";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";
import {CheckIfUserAdminModel} from "./models/check-if-user-admin.model";
import {AddRoleRequestModel} from "./models/add-role-request.model";
import {ResponseModel} from "../../components/shared/response-models/response.model";
import {GetRolesResponseModel} from "./models/get-roles-response.model";
import {UserDetailsModel} from "../../components/user/user-profile/models/user-details.model";

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  baseUrl: string = "http://localhost:8080/users/";
  public userSignedInEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
  }

  ngOnDestroy() {
    this.cookieService.delete("jwtToken");
  }

  signUp(signUpRequestModel: SignUpRequestModel): void {
    this.checkIfPasswordsSame(signUpRequestModel);
    this.httpClient.post(this.baseUrl + "register", signUpRequestModel).subscribe(response => {
    });
  }

  checkIfPasswordsSame(signUpRequestModel: SignUpRequestModel): void {
    if (signUpRequestModel.password !== signUpRequestModel.passwordConfirmation)
      throw new Error();
  }

  signIn(signInRequestModel: SignInRequestModel): Observable<DataResponseModel<SignInResponseModel>> {
    this.cookieService.delete("jwtToken");
    return this.httpClient.post<any>(this.baseUrl + "login", signInRequestModel);
  }

  signOut() {
    this.cookieService.delete("jwtToken");
  }

  addRole(addRoleRequestModel: AddRoleRequestModel): Observable<ResponseModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.cookieService.get("jwtToken")}`
    });
    return this.httpClient.post<any>(this.baseUrl + "add-role", addRoleRequestModel, {headers});
  }

  setJwtCookie(jwtToken: string) {
    this.cookieService.set("jwtToken", jwtToken);
  }

  isCurrentUserIsAdmin(): Observable<DataResponseModel<CheckIfUserAdminModel>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.cookieService.get("jwtToken")}`
    });
    return this.httpClient.get<any>(this.baseUrl + "is-user-admin", {headers});
  }

  isUserSignedIn(): Observable<ResponseModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.cookieService.get("jwtToken")}`
    });
    return this.httpClient.get<any>(this.baseUrl + "is-jwt-valid", {headers});
  }

  getRoles(): Observable<DataResponseModel<GetRolesResponseModel[]>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.cookieService.get("jwtToken")}`
    });
    return this.httpClient.get<any>(this.baseUrl + "get-roles", {headers});
  }

  getUserDetails(): Observable<DataResponseModel<UserDetailsModel>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.cookieService.get("jwtToken")}`
    });
    return this.httpClient.get<any>(this.baseUrl + "get-details", {headers});
  }
}
