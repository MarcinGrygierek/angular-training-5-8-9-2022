import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-formatter',
  templateUrl: './number-formatter.component.html',
  styleUrls: ['./number-formatter.component.scss']
})
export class NumberFormatterComponent {
  @Input()
  value: number = 0;
}
