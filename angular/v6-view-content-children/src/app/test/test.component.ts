import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  value!: number;
  isVisible: boolean = false;
  private interval: any;
  constructor() { }

  ngOnInit(): void {
    this.value = Math.round(Math.random() * 10000);

    this.interval = setInterval(() => {
      this.value = Math.round(Math.random() * 10000);
    }, 2000);
  }

  toggleVisible = () => {
    this.isVisible = !this.isVisible;
  }

}
