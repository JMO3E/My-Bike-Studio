import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from '../../shared/interface/userInterface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{

  users: User[] | undefined;
  userTest: User | undefined;
  userId: string | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });

    this.userService.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });

    // this.userService.getUserById(2).subscribe((data: User) => {
    //   console.log(data);
    //   this.userTest = data;
    // });
  }
}
