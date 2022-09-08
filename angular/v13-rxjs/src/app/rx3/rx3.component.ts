import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rx3',
  templateUrl: './rx3.component.html',
  styleUrls: ['./rx3.component.scss']
})
export class Rx3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const years = [1993, 2005, 1998, 2010, 2000];

    // const obsYears = from(years);
    const obsYears = of(...years)

    obsYears
      .pipe(
        map(year => {
          const currentYear = new Date().getFullYear();
          return currentYear - year
        }),
        tap(val => {
          console.log(`Calculated age ${val}`)
        }),
        filter(age => age >= 18)
      )
      .subscribe(val => {
        console.log(val);
      })
  }

}
