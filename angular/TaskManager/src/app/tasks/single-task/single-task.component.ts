import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Task, TaskStatus } from './single-task.model';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent implements OnInit, OnDestroy {
  @Input()
  task!: Task;

  @Output()
  onDelete = new EventEmitter<number>()

  private interval!: any;
  counter: number = 0;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

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
