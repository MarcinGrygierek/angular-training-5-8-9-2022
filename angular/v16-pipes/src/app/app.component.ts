import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text = 'Lorem ipsum';
  date = new Date();
  obj = {
    name: 'marcin',
    lastName: 'grygierek',
    age: 29
  }
  amount = 10.2312;
}
