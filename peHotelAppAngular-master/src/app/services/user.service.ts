import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../users";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseURL = "http://localhost:8080/adminpanel/users"
  private deleteURL = 'http://localhost:8080/adminpanel/deleteUser/{id}';
  private editURL = 'http://localhost:8080/adminpanel/editUser/{id}';
  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]>{
    console.log('Calling getUsersList');
    return this.httpClient.get<User[]>(this.baseURL)
  }
  deleteUser(id: number) {
    console.log('Delete User');
    return this.httpClient.delete(`${this.deleteURL.replace('{id}', id.toString())}`, { responseType: 'text' });
  }
  editUser(id: number, updatedUser: User): Observable<User> {
    console.log('Edit User');
    return this.httpClient.put<User>(`${this.editURL.replace('{id}', id.toString())}`, updatedUser);
  }
}
