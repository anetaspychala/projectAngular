import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {UserListComponent} from "../user-list/user-list.component";
import {AnimalListComponent} from "../animal-list/animal-list.component";
import {ReservationListComponent} from "../reservation-list/reservation-list.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserListComponent, AnimalListComponent, ReservationListComponent, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
