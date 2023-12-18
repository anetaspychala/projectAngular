import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AddAnimalComponent} from "../add-animal/add-animal.component";
import {AddReservationComponent} from "../add-reservation/add-reservation.component";

@Component({
  selector: 'app-owner-panel',
  standalone: true,
  imports: [CommonModule, RouterLink, AddAnimalComponent, AddReservationComponent, RouterOutlet],
  templateUrl: './owner-panel.component.html',
  styleUrl: './owner-panel.component.css'
})
export class OwnerPanelComponent {

}
