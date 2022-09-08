import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksStatusComponent } from './tasks-status/tasks-status.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksComponent } from './tasks.component';

const routes: Routes = [{ path: '', component: TasksComponent, children: [
  {
    path: 'list',
    component: TasksListComponent
  },
  {
    path: 'status',
    component: TasksStatusComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
