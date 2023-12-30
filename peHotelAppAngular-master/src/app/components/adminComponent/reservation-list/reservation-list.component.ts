import {ChangeDetectorRef, Component, ElementRef, inject, Input, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {User} from "../../../users";
import {UserService} from "../../../services/user.service";
import {Reservation} from "../../../reservations";
import {ReservationService} from "../../../services/reservation.service";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {Animal} from "../../../animals";

@Component({
  selector: 'app-reservation-list',
  standalone: true,
    imports: [CommonModule, MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit{

  @Input() dialogTitle!: string;
  @ViewChild('appDialog', { static: true }) dialog!: ElementRef<HTMLDialogElement>;
  @ViewChild('userForm', {static: true}) form: NgForm | undefined;
  reservationList: Reservation[] =[];
  isEditMode: boolean =false;
  currentReservationId: number =0;
  editedEndDate: Date = new Date();
  editedStartDate: Date = new Date();
  editedPrice: number=0;
  editedReservationStatus: string='';
  currentReservation: Reservation | undefined;
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
  deleteReservation(id: number) {
    console.log(id);
    this.reservationService.deleteReservation(id).subscribe(
      () => {
        console.log('Reservation deleted successfully');
        this.dialog.nativeElement.showModal();
      },
      error => {
        console.error('Błąd usuwania rezerwacji', error);
      }
    );
  }
  editReservation(id: number) {
    this.currentReservationId = id;
    this.isEditMode = true;
    if (this.currentReservationId) {
      this.currentReservation = this.reservationList.find((p) => p.id === id);
      console.log(this.form);
      if (this.currentReservation) {
        this.editedStartDate = this.currentReservation.startDate;
        this.editedEndDate = this.currentReservation.endDate;
        this.editedPrice = this.currentReservation.price;
        this.editedReservationStatus = this.currentReservation.reservationStatus;
        console.log('Edycja przebiegla pomyslnie')
      } else {
        console.log('Blad edycji')
      }
    }
  }
  putReservation() {
    if (this.currentReservationId) {
      const updatedReservation: Reservation = {
        id: this.currentReservationId,
        startDate: this.editedStartDate,
        endDate: this.editedEndDate,
        price: this.editedPrice,
        reservationStatus: this.editedReservationStatus,
      };
      this.reservationService.editReservation(this.currentReservationId, updatedReservation).subscribe(
        () => {
          console.log('Reservation edited successfully');
          this.isEditMode = false;
          this.getReservations();
        },
        (error) => {
          console.error('Błąd edycji rezerwacji', error);
        }
      );
    }
  }
}
