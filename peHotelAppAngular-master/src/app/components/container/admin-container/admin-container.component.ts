import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {UserListComponent} from "../../adminComponent/user-list/user-list.component";
import {AnimalListComponent} from "../../adminComponent/animal-list/animal-list.component";
import {ReservationListComponent} from "../../adminComponent/reservation-list/reservation-list.component";

@Component({
  selector: 'app-admin-container',
  standalone: true,
  imports: [CommonModule, RouterOutlet,UserListComponent, AnimalListComponent, ReservationListComponent],
  template: '<router-outlet></router-outlet>',
  styleUrl: './admin-container.component.css'
})
export class AdminContainerComponent {

}
