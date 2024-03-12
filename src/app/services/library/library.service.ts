import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {DataResponseModel} from "../../components/shared/response-models/data-response.model";
import {ReadingGoalModel} from "../../components/user/user-profile/models/reading-goal.model";
import {CookieService} from "ngx-cookie-service";
import {UserBookModel} from "../../components/user/user-profile/models/user-book-model";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  baseUrl: string = "http://localhost:8080/library";

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService) {
  }

  getReadingGoals(username: string): Observable<DataResponseModel<ReadingGoalModel[]>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.cookieService.get("jwtToken")}`
    });
    const params = new HttpParams().set("username", username);
    return this.httpClient.get<any>(this.baseUrl + "/get-reading-goals", {headers: headers, params: params});
  }

  getUserBooks(username: string): Observable<DataResponseModel<UserBookModel[]>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.cookieService.get("jwtToken")}`
    });
    const params = new HttpParams().set("username", username);
    return this.httpClient.get<any>(this.baseUrl + "/get-userbooks", {headers: headers, params: params});
  }
}
