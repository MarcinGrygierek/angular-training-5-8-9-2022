import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { PageContentComponent } from './page-content/page-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskFormReactiveComponent } from './task-form-reactive/task-form-reactive.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleTaskComponent,
    TasksListComponent,
    PageContentComponent,
    TaskFormComponent,
    TaskFormReactiveComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
  FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
