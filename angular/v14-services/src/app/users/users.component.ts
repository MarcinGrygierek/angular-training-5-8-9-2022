import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  // providers: [UsersService], // tylko jeśli chcemy aby komponent posiadał własną kopię tego serwisu
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit  {
  users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

  addUser = () => {
    this.usersService.addUser();
    
    // aktualizujemy tablicę - ponieważ dodawanie użytokwnika powoduje utworzenie
    // nowej tablicy (nowa referencja)
    this.users = this.usersService.getUsers();
  }

  
}
