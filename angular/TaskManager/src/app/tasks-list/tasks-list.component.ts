import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SingleTaskComponent } from '../single-task/single-task.component';
import { Task, TaskStatus } from '../single-task/single-task.model';
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit, AfterViewInit {
  tasks: Task[] = [{
    id: 1,
    name: 'Lorem',
    status: TaskStatus.New,
    hidden: false
  }];

  checkInterval!: any;
  totalTime: number = 0;

  @ViewChildren(SingleTaskComponent)
  taskComponents!: QueryList<SingleTaskComponent>

  ngOnInit(): void {
    this.checkInterval = setInterval(() => {
      this.getTotalTime();
    }, 1000);
  }

  ngAfterViewInit(): void {
    console.log(this.taskComponents);
  }

  getTotalTime = () => {
    const times = this.taskComponents.map(task => task.counter);
    this.totalTime = times.reduce((acc, curr) => acc + curr);
  }

  addTask = () => {
    const newTask: Task = {
      id: new Date().getTime(),
      name: 'Lorem ipsum',
      status: TaskStatus.New,
      hidden: false
    }

    // mutujemy oryginalną tablicę
    // this.tasks.push(newTask);

    // niemutujemy - tworzymy nową tablicę
    this.tasks = [...this.tasks, newTask];
  }

  handleTaskDelete = (id: number) => {
    // permamentne usunięcie z listy
    // this.tasks = this.tasks.filter(task => task.id !== id)
    this.tasks = this.tasks.map(task => {
      if(task.id === id) return {
        ...task,
        hidden: true
      }
      return task
    })
  }

  taskIdentity = (index: number, task: Task) => task.id;
}
