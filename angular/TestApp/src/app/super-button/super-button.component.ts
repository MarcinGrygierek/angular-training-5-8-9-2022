import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-super-button',
  templateUrl: './super-button.component.html',
  styleUrls: ['./super-button.component.scss']
})
export class SuperButtonComponent {
  @Input()
  label: string = '';

  @Input()
  click!: Function;

  handleButtonClick = (e: Event) => {
    if(typeof this.click !== 'function') return;

    this.click('Lorem ipsum');
  }
}
