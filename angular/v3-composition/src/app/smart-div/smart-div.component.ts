import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-div',
  templateUrl: './smart-div.component.html',
  styleUrls: ['./smart-div.component.scss']
})
export class SmartDivComponent implements OnInit {

  isVisible = false;

  toggle() {
    this.isVisible = !this.isVisible;
  }

  constructor() { }

  ngOnInit(): void {
  }

  
}
