import {ChangeDetectorRef, Component, ElementRef, inject, Input, OnInit, ViewChild} from '@angular/core';
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
  @Input() dialogTitle!: string;
  @ViewChild('appDialog', { static: true }) dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);

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
        this.dialog.nativeElement.showModal();
      },
      error => {
        console.error('Error adding animal', error);
      }
    );
  }
}
