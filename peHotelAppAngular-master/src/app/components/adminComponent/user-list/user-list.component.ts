import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {User} from "../../../users";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  userList: User[] =[];
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.getUsers();
  }
private getUsers(){
    this.userService.getUsersList().subscribe(
      data => {
        this.userList = data;
        console.log(data);
      },
      error => {
        console.error('Bład pobierania użytkowników')
      });
}
}
