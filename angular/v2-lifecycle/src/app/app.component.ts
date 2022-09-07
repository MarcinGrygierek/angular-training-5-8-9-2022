import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isVisible: boolean = false;

  toggleVisibility = () => {
    this.isVisible = !this.isVisible;
  }
}
