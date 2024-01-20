import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";
import {ResponseModel} from "../../components/shared/response-models/response.model";
import {AddCategoryRequestModel} from "./models/add-category-request.model";
import {DataResponseModel} from "../../components/shared/response-models/data-response.model";
import {GetRolesResponseModel} from "../user/models/get-roles-response.model";
import {GetCategoriesResponseModel} from "./models/get-categories-response.model";
import {AddBookRequestModel} from "./models/add-book-request.model";
import {BookDetailModel} from "../../components/book/models/book-detail.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl: string = "http://localhost:8080/books/";

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService) {
  }


  addBook(addBookRequestModel: AddBookRequestModel): Observable<ResponseModel> {
    let response = this.httpClient.post<any>(this.baseUrl + "add", addBookRequestModel);
    return response;
  }

  addCategory(addCategoryRequestModel: AddCategoryRequestModel): Observable<ResponseModel> {
    let response = this.httpClient.post<any>(this.baseUrl + "categories/add", addCategoryRequestModel);
    return response;
  }

  getCategories(): Observable<DataResponseModel<GetCategoriesResponseModel[]>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.cookieService.get("jwtToken")}`
    });
    return this.httpClient.get<any>(this.baseUrl + "categories/get-all", {headers});
  }

  getBookDetail(id: number): Observable<DataResponseModel<BookDetailModel>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.cookieService.get("jwtToken")}`
    });
    return this.httpClient.get<any>(this.baseUrl + "get-detail", {headers, params: new HttpParams().set("id", id)});
  }
}
