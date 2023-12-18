import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {User} from "../../../users";
import {UserService} from "../../../services/user.service";
import {Reservation} from "../../../reservations";
import {ReservationService} from "../../../services/reservation.service";

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit{
  reservationList: Reservation[] =[];
  constructor(private reservationService: ReservationService) {}
  ngOnInit() {
    this.getReservations();
  }
  private getReservations(){
    this.reservationService.getReservationsList().subscribe(
      data => {
        this.reservationList = data;
        console.log(data);
      },
      error => {
        console.error('Bład pobierania użytkowników')
      });
  }

}
