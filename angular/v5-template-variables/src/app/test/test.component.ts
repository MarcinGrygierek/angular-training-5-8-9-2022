import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {
  public value: number = 0;
  private interval: any;
  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.value++;
    }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
