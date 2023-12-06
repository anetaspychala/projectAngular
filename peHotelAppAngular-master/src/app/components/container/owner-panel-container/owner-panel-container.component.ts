import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AddAnimalComponent} from "../../userComponent/add-animal/add-animal.component";

@Component({
  selector: 'app-owner-panel-container',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AddAnimalComponent,  RouterLink],
  template: '<router-outlet></router-outlet>',
  styleUrl: './owner-panel-container.component.css'
})
export class OwnerPanelContainerComponent {

}
