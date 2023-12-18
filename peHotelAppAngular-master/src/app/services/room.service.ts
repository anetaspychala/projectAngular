import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../rooms";
import {User} from "../users";

@Injectable({
  providedIn: 'root'
})

export class RoomService {
  private baseURL = "http://localhost:8080/rooms"
  private postURL = "http://localhost:8080/addRoom"
  constructor(private httpClient: HttpClient) { }

  getRoomsList(): Observable<Room[]>{
    console.log('Calling getRoomsList');
    return this.httpClient.get<Room[]>(this.baseURL)
  }

  postRoom(room: Room): Observable<Room[]> {
    console.log('Calling postRoom');
    return this.httpClient.post<Room[]>(this.postURL, room);
  }
}
