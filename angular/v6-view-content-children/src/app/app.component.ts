import { Component, OnInit, QueryList, ViewChildren, AfterViewChecked, AfterViewInit } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChildren(TestComponent)
  tests!: QueryList<TestComponent>

  ngOnInit(): void {
    console.log('Init');
  }

  ngAfterViewInit(): void {
    console.log('After view init', this.tests);
    this.tests.forEach(el => {
      console.log(el.value);
    })
  }

  ngAfterViewChecked(): void {
    // wywoływane za każdym razem kiedy zagnieżdżony widok przejdzie detekcję zmian
    // console.log('CHECKED nested view');
  }

  getMax = () => {
    this.tests.forEach(test => {
      test.toggleVisible()
    })

   const values = this.tests.map(test => test.value);
   values.sort((a, b) => b - a); 
   console.log(`Max: ${values[0]}`)
  }
}
