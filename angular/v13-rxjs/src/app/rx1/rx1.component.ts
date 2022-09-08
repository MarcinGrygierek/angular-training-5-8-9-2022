import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { tap, filter, map, delay, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-rx1',
  templateUrl: './rx1.component.html',
  styleUrls: ['./rx1.component.scss']
})
export class Rx1Component implements OnInit {
  users =  [
    {
      id: 1,
      name: 'Marcin'
    },
    {
      id: 2,
      name: 'Łukasz'
    },
    {
      id: 3,
      name: 'Anna'
    }
  ];



 ngOnInit(): void {
   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

   const mapped = arr
    .filter(el => el % 2)
    .map(el => el * el);
   console.log(mapped);

  //const subs = of(...arr);
   const subs = from(arr);
  
   // Odzwierciedlamy działanie map oraz filter dla strumienia
   subs
    .pipe(
      tap(el => {
        console.log(`Before filter ${el}`)
      }),
      filter(el => el % 2 === 1),
      tap(el => {
        console.log(`Before map ${el}`)
      }),
      map(el => el * el)
    )
    .subscribe(value => {
      console.log(value);
    })

  // symulacja opóźnienia w dostarczaniu
  const userSubs = from(this.users)
    .pipe(
      map(el => of(el)
        .pipe(delay(Math.random() * 5000))
      ),
      mergeMap(el => el)
    )
    .subscribe(user => {
    console.log(user);
  })

  // symulacja wykonania wielu zapytań
  const ids = [1, 2, 3, 4];
  from(ids)
    .pipe(
      map(id => 
        of(id) // of symuluje zapytanie do API (również może być Observable)
        .pipe(
          delay(Math.random() * 5000),
          map(id => ({
            id,
            name: `LoremIpsum${id}`
          }))
      )),
      mergeMap(val => val)
    ).subscribe(object => {
      console.log('Got object', object);
    })

 }
}
