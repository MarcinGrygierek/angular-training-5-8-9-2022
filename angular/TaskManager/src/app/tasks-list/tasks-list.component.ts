import { Component } from '@angular/core';
import { Task, TaskStatus } from '../single-task/single-task.model';
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  tasks: Task[] = [{
    id: 1,
    name: 'Lorem',
    status: TaskStatus.New
  }];

  addTask = () => {
    const newTask: Task = {
      id: new Date().getTime(),
      name: 'Lorem ipsum',
      status: TaskStatus.New
    }

    // mutujemy oryginalną tablicę
    // this.tasks.push(newTask);

    // niemutujemy - tworzymy nową tablicę
    this.tasks = [...this.tasks, newTask];
  }

  handleTaskDelete = (id: number) => {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

  taskIdentity = (index: number, task: Task) => task.id;
}
