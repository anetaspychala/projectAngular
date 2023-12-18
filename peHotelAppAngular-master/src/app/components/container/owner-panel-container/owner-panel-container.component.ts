import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AddAnimalComponent} from "../../userComponent/add-animal/add-animal.component";
import {AddReservationComponent} from "../../userComponent/add-reservation/add-reservation.component";
import {AddRoomComponent} from "../../userComponent/add-room/add-room.component";

@Component({
  selector: 'app-owner-panel-container',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AddAnimalComponent, AddReservationComponent, AddRoomComponent],
  template: '<router-outlet></router-outlet>',
  styleUrl: './owner-panel-container.component.css'
})
export class OwnerPanelContainerComponent {

}
