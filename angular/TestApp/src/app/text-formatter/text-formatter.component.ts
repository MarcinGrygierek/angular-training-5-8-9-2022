import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-formatter',
  templateUrl: './text-formatter.component.html',
  styleUrls: ['./text-formatter.component.scss']
})
export class TextFormatterComponent {
  @Input()
  text!: string;
}
