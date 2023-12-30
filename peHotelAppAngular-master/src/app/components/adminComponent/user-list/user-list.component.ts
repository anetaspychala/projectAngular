import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, Input, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {User} from "../../../users";
import {UserService} from "../../../services/user.service";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit, AfterViewInit{
  @Input() dialogTitle!: string;
  @ViewChild('appDialog', {static: true}) dialog!: ElementRef<HTMLDialogElement>;
  userList: User[] = [];
  @ViewChild('userForm', {static: true}) form: NgForm | undefined;
  currentUserId:number =0;
  currentUser: User | undefined;
  editedFirstName: string = '';
  editedlastName: string = '';
  editednumber: number =0;
  editedlogin: string = '';
  editedpassword: string = '';
  editedemail: string = '';
  isEditMode = false;
  editedrole: string ='';

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }
ngAfterViewInit() {
    this.getUsers()
}

  private getUsers() {
    this.userService.getUsersList().subscribe(
      data => {
        this.userList = data;
        console.log(data);
      },
      error => {
        console.error('Bład pobierania użytkowników')
      });
  }

  deleteUser(id: number) {
    console.log(id);
    this.userService.deleteUser(id).subscribe(
      () => {
        console.log('User deleted successfully');
        this.dialog.nativeElement.showModal();
      },
      error => {
        console.error('Błąd usuwania użytkownika', error);
      }
    );
  }

  editUser(id:number) {
    this.currentUserId = id;
    this.isEditMode = true;
    if (this.currentUserId) {
      this.currentUser = this.userList.find((p) => p.id === id);
      console.log(this.form);
      if (this.currentUser) {
        this.editedFirstName = this.currentUser.firstName;
        this.editedlastName = this.currentUser.lastName;
        this.editedemail=this.currentUser.email;
        this.editednumber=this.currentUser.phone;
        this.editedlogin=this.currentUser.login;
        this.editedpassword=this.currentUser.password
        this.editedrole=this.currentUser.roles}
    console.log('Edycja przebiegla pomyslnie')}
      else {
      console.log('Blad edycji')}
    }

  putUser() {
    if (this.currentUserId) {
      const updatedUser: User = {
        id: this.currentUserId,
        firstName: this.editedFirstName,
        lastName: this.editedlastName,
        email: this.editedemail,
        phone: this.editednumber,
        login: this.editedlogin,
        password: this.editedpassword,
        roles: this.editedrole,
      };
      this.userService.editUser(this.currentUserId, updatedUser).subscribe(
        () => {
          console.log('User edited successfully');
          this.isEditMode = false;
          this.getUsers();
        },
        (error) => {
          console.error('Błąd edycji użytkownika', error);
        }
      );
    }
  }
}
