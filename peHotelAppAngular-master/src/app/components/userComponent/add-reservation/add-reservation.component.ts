import {ChangeDetectorRef, Component, ElementRef, inject, Input, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {Reservation, UserModel} from "../../../reservations";
import {User} from "../../../users";
import {AnimalService} from "../../../services/animal.service";
import {ReservationService} from "../../../services/reservation.service";

@Component({
  selector: 'app-add-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatDatepickerModule],
  templateUrl: './add-reservation.component.html',
  styleUrl: './add-reservation.component.css'
})
export class AddReservationComponent {
  @Input() dialogTitle!: string;
  @ViewChild('appDialog', { static: true }) dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);

  reservation: Reservation = {
    id: 0,
/*    reservationNumber: 0,*/
    startDate: new Date(),
    endDate: new Date(),
    price: 0,
    reservationStatus: '',
   // user: new UserModel(0, 'John', 'Doe', 'john.doe@example.com', 1234567890, 'johndoe', 'password123')
  };
  constructor(private reservationService: ReservationService) {
  }
  addReservation() {
    this.reservationService.postReservation(this.reservation).subscribe(
      response => {
        console.log('Reservation added successfully', response);
        this.dialog.nativeElement.showModal();
      },
      error => {
        console.error('Error adding reservation', error);
      }
    );
  }
}
