import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { endWith, filter, map, scan, startWith, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rx2',
  templateUrl: './rx2.component.html',
  styleUrls: ['./rx2.component.scss']
})
export class Rx2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obs = new Observable<number>(observer => {
      const interval = setInterval(() => {
        observer.next(Math.round(Math.random() * 100));
      }, 100)
      return {
        unsubscribe() {
          console.log('Unsubscribe');
          clearInterval(interval);
        }
      }
    })

    // const subscription = obs
    // .pipe(
    //   filter(val => val % 2 === 0),
    //   take(5),
    //   map(val => ({ number: val}))
    // )
    // .subscribe(value => {
    //   console.log(value);
    // });

    // const sub2 = obs
    //   .pipe(
    //     startWith(100000),
    //     takeUntil(timer(2000)),
    //     endWith(200000)
    //   )
    //   .subscribe(val => {
    //     console.log(val);
    //   })

    // const sumSub = obs
    //   .pipe(
    //     scan((acc, number) => acc + number)
    //   )
    //   .subscribe(val => {
    //     console.log('Accumulated sum', val);
    //   })


    // ilość elementów trafiających do subskrybenta zależy od umiejscowienia take()
    // take ogranicza ilość danych która pojawiła się w strumieniu przed jego wywołaniem
    // wszystko później nie wlicza się w ograniczenie
    const subTake = obs
    .pipe(
      take(5),
      startWith(10),
      endWith(20),
    )
    .subscribe(value => {
      console.log(value);
    });

  }

  



}
