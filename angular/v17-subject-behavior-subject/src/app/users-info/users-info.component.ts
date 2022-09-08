import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.scss']
})
export class UsersInfoComponent implements OnInit, OnDestroy {
  usersCount: number = 0;
  sub!: Subscription;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.sub = this.usersService.users.subscribe(users => {
      this.usersCount = users.length;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
