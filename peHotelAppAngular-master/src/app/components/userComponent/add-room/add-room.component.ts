import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {Room} from "../../../rooms";
import {UserPostService} from "../../../services/user-post.service";
import {RoomService} from "../../../services/room.service";

@Component({
  selector: 'app-add-room',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css'
})
export class AddRoomComponent {

  room: Room ={
    id: 0,
    name: '',
    standard: '',
    animalSize: 0,
    isActive: '',
   // reservationIds: new Set<number>(),
  };
  constructor(private roomService: RoomService) {
  }
  addRoom() {
   // const reservationIdToAdd = 1;
  //  this.room.reservationIds.add(reservationIdToAdd);

    this.roomService.postRoom(this.room).subscribe(
      response => {
        console.log('Room added successfully', response);
      },
      error => {
        console.error('Error adding room', error);
      }
    );
  }
}

