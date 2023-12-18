import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {Animal} from "../../../animals";
import {AnimalService} from "../../../services/animal.service";

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent implements OnInit{
  animalList: Animal[] =[];
  constructor(private animalService: AnimalService) {}
  ngOnInit() {
    this.getAnimals();
  }
  private getAnimals(){
    this.animalService.getAnimalsList().subscribe(
      data => {
        this.animalList = data;
        console.log(data);
      },
      error => {
        console.error('Bład pobierania użytkowników')
      });
  }
}


