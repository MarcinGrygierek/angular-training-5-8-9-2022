import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { UserComponent } from './dashboard/user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'settings', component: SettingsComponent
      },
      {
        path: 'users/:id', component: UserComponent
      }
    ]
  },
  {
    path: '', pathMatch: 'full', component: WelcomeComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
