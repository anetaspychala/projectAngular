import {ChangeDetectorRef, Component, ElementRef, inject, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {UserPostService} from "../../../services/user-post.service";
import {User} from "../../../users";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})

export class AddUserComponent {

  @Input() dialogTitle!: string;
  @ViewChild('appDialog', { static: true }) dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);

   user: User = {
     id: 0,
     firstName: '',
     lastName: '',
     email: '',
     phone: 0,
     login: '',
     password: '',
     roles: '',
   };

  constructor(private userPostService: UserPostService) {
  }

  formSubmitted = false;
  addUser() {
    this.formSubmitted = true;
    this.userPostService.postUser(this.user).subscribe(
      response => {
        console.log('User added successfully', response);
        this.dialog.nativeElement.showModal();
      },
      error => {
        console.error('Error adding user', error);
      }
    );
  }
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

}
