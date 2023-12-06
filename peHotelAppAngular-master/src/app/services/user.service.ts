import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8080/users"

  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]>{
    console.log('Calling getUsersList');
    return this.httpClient.get<User[]>(this.baseURL)
  }
}
