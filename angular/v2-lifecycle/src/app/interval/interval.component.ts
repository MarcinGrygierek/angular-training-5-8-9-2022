import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit, OnDestroy {
  numbers: number[] = [1, 2, 3];

  private interval!: any; // wyjątkowo!

  ngOnInit(): void {
    this.interval = setInterval(() => {
      // metoda mutacyjna
      // this.numbers.push(Math.round(Math.random() * 100));
      console.log('Tick')
      // metoda niemutacyjna - działa z OnPush
      this.numbers = [...this.numbers, Math.round(Math.random() * 100)];
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
