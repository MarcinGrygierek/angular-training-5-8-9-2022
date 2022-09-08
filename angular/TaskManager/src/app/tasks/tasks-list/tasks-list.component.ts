import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from 'src/app/tasks.service';
import { SingleTaskComponent } from '../single-task/single-task.component';
import { Task } from '../single-task/single-task.model';
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit, AfterViewInit {
  tasks!: Observable<Task[]>;

  checkInterval!: any;
  totalTime: number = 0;

  @ViewChildren(SingleTaskComponent)
  taskComponents!: QueryList<SingleTaskComponent>

  constructor(private tasksService: TasksService) {
    this.tasks = this.tasksService.tasks;
  }

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
    this.totalTime = times.reduce((acc, curr) => acc + curr, 0);
  }

  addTask = (name: string) => {
    this.tasksService.addTask(name);
  }

  handleTaskDelete = (id: number) => {
    this.tasksService.deleteDask(id);
  }

  taskIdentity = (index: number, task: Task) => task.id;
}
