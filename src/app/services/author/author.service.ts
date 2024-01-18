import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {AddAuthorRequestModel} from "./models/add-author-request.model";
import {Observable} from "rxjs";
import {ResponseModel} from "../../components/shared/response-models/response.model";
import {DataResponseModel} from "../../components/shared/response-models/data-response.model";
import {GetCategoriesResponseModel} from "../book/models/get-categories-response.model";
import {GetAuthorsResponseModel} from "./models/get-authors-response.model";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  baseUrl: string = "http://localhost:8080/authors/";

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService) {
  }


  addAuthor(addAuthorRequestModel: AddAuthorRequestModel): Observable<ResponseModel> {
    let response = this.httpClient.post<any>(this.baseUrl + "add", addAuthorRequestModel,);
    return response;
  }

  getAuthors(): Observable<DataResponseModel<GetAuthorsResponseModel[]>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.cookieService.get("jwtToken")}`
    });
    return this.httpClient.get<any>(this.baseUrl + "get-all", {headers});
  }
}
