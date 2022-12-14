import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskFormReactiveComponent } from './task-form-reactive/task-form-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TasksStatusComponent } from './tasks-status/tasks-status.component';

@NgModule({
  declarations: [
    TasksComponent,
    SingleTaskComponent,
    TasksListComponent,
    TaskFormComponent, 
    TaskFormReactiveComponent, TasksStatusComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TasksModule { }
