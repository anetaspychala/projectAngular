import { Component, ElementRef, inject, Input, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {Room} from "../../../rooms";
import {RoomService} from "../../../services/room.service";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})
export class RoomListComponent implements OnInit{
  @Input() dialogTitle!: string;
  @ViewChild('appDialog', { static: true }) dialog!: ElementRef<HTMLDialogElement>;
  roomList: Room[] =[];
  @ViewChild('roomForm', {static: true}) form: NgForm | undefined;
  currentRoomId: number =0;
  currentRoom: Room | undefined;
  editedName: string ='';
  editedStandard: string = '';
  editedAnimalSize: number = 0;
  editedActive: string ='';
  isEditMode: boolean = false;
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


  deleteRoom(id: number) {
    console.log(id);
    this.roomService.deleteRoom(id).subscribe(
      () => {
        console.log('Room deleted successfully');
        this.dialog.nativeElement.showModal();
      },
      error => {
        console.error('Błąd usuwania pokoju', error);
      }
    );
  }
  editRoom(id:number) {
    this.currentRoomId = id;
    this.isEditMode = true;
    if (this.currentRoomId) {
      this.currentRoom = this.roomList.find((p) => p.id === id);
      console.log(this.form);
      if (this.currentRoom) {
        this.editedName = this.currentRoom.name;
        this.editedStandard = this.currentRoom.standard;
        this.editedAnimalSize = this.currentRoom.animalSize;
        this.editedActive = this.currentRoom.isActive;
        console.log('Edycja przebiegla pomyslnie')
      } else {
        console.log('Blad edycji')
      }
    }
  }
  putRoom() {
    if (this.currentRoomId) {
      const updatedRoom: Room = {
        id: this.currentRoomId,
        name: this.editedName,
        standard: this.editedStandard,
        animalSize: this.editedAnimalSize,
        isActive: this.editedActive,
      };
      this.roomService.editRoom(this.currentRoomId, updatedRoom).subscribe(
        () => {
          console.log('Room edited successfully');
          this.isEditMode = false;
          this.getRooms();
        },
        (error) => {
          console.error('Błąd edycji pokoju', error);
        }
      );
    }
  }
}
