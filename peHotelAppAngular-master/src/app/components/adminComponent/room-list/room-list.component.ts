import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {User} from "../../../users";
import {UserService} from "../../../services/user.service";
import {Room} from "../../../rooms";
import {RoomService} from "../../../services/room.service";

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})
export class RoomListComponent implements OnInit{
  roomList: Room[] =[];
  constructor(private roomService: RoomService) {}
  ngOnInit() {
    this.getRooms();
  }
  private getRooms(){
    this.roomService.getRoomsList().subscribe(
      data => {
        this.roomList = data;
        console.log(data);
      },
      error => {
        console.error('Bład pobierania pokoi')
      });
  }


}
