import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, children: [
      {
        path: 'info',
        component: InfoComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
