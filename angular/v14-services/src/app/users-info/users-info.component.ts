import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  // providers: [UsersService], // tylko jeśli chcemy aby komponent posiadał własną kopię tego serwisu
  styleUrls: ['./users-info.component.scss']
})
export class UsersInfoComponent implements OnInit, OnDestroy {
  count: number = 0;
  interval: any;
  constructor(private usersService: UsersService) { }

  // To nie jest dobre podejście, lepiej jakby to serwis nas informował
  // za każdym razem jak pojawią się nowe dane - subskrypcja
  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.count = this.usersService.getUsersCount();
    }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }


}
