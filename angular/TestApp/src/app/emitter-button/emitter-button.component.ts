import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-emitter-button',
  templateUrl: './emitter-button.component.html',
  styleUrls: ['./emitter-button.component.scss']
})
export class EmitterButtonComponent  {
  @Input()
  label: string = '';

  @Output()
  onButtonClick = new EventEmitter<string>()

  handleButtonClick(e: Event) {
    this.onButtonClick.emit('emitted lorem ipsum');
  }

}
