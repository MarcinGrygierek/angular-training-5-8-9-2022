import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskStatus } from './single-task.model';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent {
  @Input()
  task!: Task;

  @Output()
  onDelete = new EventEmitter<number>()

  getTaskStatus = (task: Task) => {
    switch(task.status) {
      case TaskStatus.New: return 'Nowe';
      case TaskStatus.InProgress: return 'W trakcie';
      case TaskStatus.Done: return 'Zakończone';
      default: return '-'
    }
  }


  deleteTask = (id: number) => {
    this.onDelete.emit(id);
  }
}
