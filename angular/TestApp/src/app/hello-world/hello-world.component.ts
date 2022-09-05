import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {

  private _name: string = 'Marcin';

  get name() {
    return this._name;
  }

  getName() {
    return this._name;
  }

}
