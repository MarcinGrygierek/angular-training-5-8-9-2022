import { Component, Input, OnChanges, OnDestroy, OnInit, DoCheck, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  @Input()
  text!: string;

  @Input()
  numbers: number[] = []

  ngOnInit(): void {
    console.log('Init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes', changes);
  }

  ngDoCheck(): void {
    console.log('Check');
  }

  ngOnDestroy(): void {
    console.log('Destroy')
  }

}
