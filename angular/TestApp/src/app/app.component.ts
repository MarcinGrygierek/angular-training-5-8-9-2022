import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isVisible: boolean = false;
  texts = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'];

  getText = () => {
 
    return this.texts[Math.round(Math.random() * 4)];
  }

  buttonClick = (info: string) => {
    this.isVisible = !this.isVisible;
    console.log('Kliknięto przycik', info)
  }
}
