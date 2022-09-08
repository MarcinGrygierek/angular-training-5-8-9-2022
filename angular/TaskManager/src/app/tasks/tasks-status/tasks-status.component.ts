import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-tasks-status',
  templateUrl: './tasks-status.component.html',
  styleUrls: ['./tasks-status.component.scss']
})
export class TasksStatusComponent {
  count!: Observable<number>;

  constructor(private tasksService: TasksService) {
    this.count = this.tasksService.tasksCount;
  }
}
