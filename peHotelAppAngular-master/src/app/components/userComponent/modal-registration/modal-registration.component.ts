import {Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogActions, MatDialogClose} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-modal-registration',
  standalone: true,
  imports: [CommonModule, MatDialogActions, MatButtonModule, MatDialogClose],
  templateUrl: './modal-registration.component.html',
  styleUrl: './modal-registration.component.css'
})

export class ModalRegistrationComponent {


}
