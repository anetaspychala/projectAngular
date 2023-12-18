import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {Animal} from "../../../animals";
import {RoomService} from "../../../services/room.service";
import {AnimalService} from "../../../services/animal.service";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-add-animal',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, ],
  templateUrl: './add-animal.component.html',
  styleUrl: './add-animal.component.css'
})
export class AddAnimalComponent {

  animal: Animal= {
    id: 0,
    type: '',
    weight: 0,
    name: '',
    sex: '',
  }
  constructor(private animalService: AnimalService) {
  }
  addAnimal() {
    this.animalService.postAnimal(this.animal).subscribe(
      response => {
        console.log('Animal added successfully', response);
      },
      error => {
        console.error('Error adding animal', error);
      }
    );
  }
}
