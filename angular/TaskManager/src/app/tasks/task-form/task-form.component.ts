import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @Input()
  addNewTask!: (name: string) => void

  newTaskName: string = '';

  handleNewTask = () => {
    if(typeof this.addNewTask !== 'function') return;

    this.addNewTask(this.newTaskName);
  }
}
