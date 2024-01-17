import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";
import {ResponseModel} from "../../components/shared/response-models/response.model";
import {AddCategoryRequestModel} from "./models/add-category-request.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl: string = "http://localhost:8080/books/";

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService) {
  }


  addCategory(addCategoryRequestModel: AddCategoryRequestModel): Observable<ResponseModel> {
    let response = this.httpClient.post<any>(this.baseUrl + "categories/add", addCategoryRequestModel,);
    return response;
  }
}
