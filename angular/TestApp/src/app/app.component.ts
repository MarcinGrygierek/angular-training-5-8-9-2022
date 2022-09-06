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

  isVisible: boolean = false;
  texts = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'];

  users: User[] = [
    {
      id: 1,
      name: 'Marcin',
      age: 29
    }, {
      id: 2,
      name: 'Łukasz',
      age: 13
    }, {
      id: 3,
      name: 'Tomasz',
      age: 40
    }
  ]

  getText = () => {
 
    return this.texts[Math.round(Math.random() * 4)];
  }

  buttonClick = (info: string) => {
    this.isVisible = !this.isVisible;
    console.log('Kliknięto przycik', info)
  }

  userTrackBy(index: number, user: User) {
    return user.id;
  }

  getElementClass(index: number) {
    return index % 2 === 0 ? 'even' : 'odd'
  }
}
