import {Injectable, } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Animal} from "../animals";
import {Reservation} from "../reservations";

@Injectable({
  providedIn: 'root'
})

export class ReservationService {
  private baseURL = "http://localhost:8080/reservations"
  private postURL = "http://localhost:8080/addReservation"
  constructor(private httpClient: HttpClient) { }

  getReservationsList(): Observable<Reservation[]>{
    console.log('Calling getReservationsList');
    return this.httpClient.get<Reservation[]>(this.baseURL)
  }
  postReservation(reservation: Reservation): Observable<Reservation[]> {
    console.log('Calling postReservation');
    return this.httpClient.post<Reservation[]>(this.postURL, reservation);
  }
}
