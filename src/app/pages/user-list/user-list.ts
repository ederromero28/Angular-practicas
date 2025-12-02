import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { User } from '../../services/user';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-user-list',
  imports: [Header, RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit{

  constructor(public userService : User) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {

    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log(data);

        this.userService.users = data;
      },
      error: (e) => {
        console.log(e);
      }
    })
  }
}


