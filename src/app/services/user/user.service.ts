import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignUpRequestModel} from "../../components/user/sign-up/models/sign-up-request-model";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "http://localhost:8080/users";

  constructor(private httpClient: HttpClient) {
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
}
