import { Component } from '@angular/core';
import { OnInit } from '@angular/core/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
    const obs = new Observable(observer => {
      console.log('Observable start');
      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        observer.next(counter);
      }, 1000)

      return {
        unsubscribe() {
          console.log('Observable finish');
          clearInterval(interval);
        }
      }
    })

    // const subscription2 = obs.subscribe(value => {
    //   console.log('Value2', value);
    // })

    // setTimeout(() => {
    //   const subscription = obs.subscribe(value => {
    //     console.log('Value1', value);
    //   })

    //   setTimeout(() => {
    //     subscription.unsubscribe();
    //     subscription2.unsubscribe();
    //   }, 5000);

    // }, 2000);


    const prms = new Promise((resolve, reject) => {
      console.log('Promise start')
      let counter = 0;
      const interval = setInterval(() => {
        counter++;

        if(counter === 5) {
          resolve(counter);
          clearInterval(interval);
        }
      }, 1000);
    })

    setTimeout(() => {
      console.log('starting promise'),
      prms.then(value => {
        console.log('Promise resolved', value);
      })
    }, 6000)


    const observableFromPromise = from(prms);
    observableFromPromise.subscribe(value => {
      console.log('Observable from promise', value);
    })

    of(1, 2, 3, 4, 5).subscribe(value => {
      console.log('Of', value);
    })
   


  }
}
