import { Injectable } from '@angular/core';
import { User } from './user.model';


// Jeżeli chcemy aby serwis był dostępny tylko w danym komponencie
// to można zakomentować @Injectable i dodać providers: [UsersService]
// w dekoratorze komponentu, ale wtedy każdy komponent który użyje serwisu
// w ten sposób będzie posiadać jego własną kopię

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [{
    id: 1,
    name: 'Marcin',
    lastName: 'Grygierek'
  }, {
    id: 2,
    name: 'Marian',
    lastName: 'Grygierek'
  }]

  constructor() {
    console.log('Counstructing UsersService')
  }

  getUsers = (): User[] => {
    return this.users;
  }

  getUsersCount = (): number => {
    console.log('Getting number of users', this.users);
    return this.users.length;
  }

  addUser = () => {
    this.users = [
      ...this.users,
      {
        id: this.users.length + 1,
        name: 'Lorem',
        lastName: 'Ipsum'
      }
    ]
  }
}
