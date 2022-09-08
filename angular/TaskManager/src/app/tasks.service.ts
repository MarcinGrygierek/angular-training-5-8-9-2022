import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task, TaskStatus } from './tasks/single-task/single-task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  public tasks!: Observable<Task[]>;

  private tasksCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public tasksCount!: Observable<number>;

  constructor() { 
    this.tasks = this.tasks$.asObservable();
    this.tasksCount = this.tasksCount$.asObservable();
  }

  addTask = (name: string) => {
    const newTask: Task = {
      id: new Date().getTime(),
      name,
      status: TaskStatus.New,
      hidden: false
    }

    this.tasks$.next([
      ...this.tasks$.value,
      newTask
    ])

    this.tasksCount$.next(this.tasks$.value.length);
  }

  deleteDask = (id: number) => {
    const newTasks = this.tasks$.value.map(task => {
      if(task.id === id) return {
        ...task,
        hidden: true
      }
      return task
    })

    const hiddenTasks = newTasks.filter(task => !task.hidden);

    this.tasks$.next(newTasks);
    this.tasksCount$.next(hiddenTasks.length);
  }


}
