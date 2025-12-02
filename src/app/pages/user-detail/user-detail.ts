import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { User } from '../../services/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  imports: [Header],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail{

  selectedUser: any;

  constructor(public userService: User, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getUser(id);
  }

    getUser(id: number) {
      this.userService.getUser(id).subscribe({
        next: (data) => {
          console.log(data);
          this.selectedUser = data;
        },
        error: (e) => {
          console.log(e);
        }
      })
    }

}
