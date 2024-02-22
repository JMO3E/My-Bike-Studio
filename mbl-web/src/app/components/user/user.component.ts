import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from '../../shared/interface/userInterface';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{

  users: User[] | undefined;
  userId: string | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.userService.getUsers()
    .pipe(
      tap((data: User[]) => {
        console.log(data);
        this.users = data;
      }),
      untilDestroyed(this)
    ).subscribe();
  }
}
