import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[] = [{
    id: 1,
    name: 'Marcin',
    age: 29
  },
  {
    id:2,
    name: 'Ania',
    age: 9
  },
  {
    id: 3,
    name: 'Łukasz',
    age: 29
  },
  {
    id: 4,
    name: 'Tomek',
    age: 1
  },
]

  userIdentity = (index: number, user: User) => user.id
}
