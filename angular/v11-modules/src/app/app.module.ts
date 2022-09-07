import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // DashboardModule // nie importujemy - będziemy to importować na etapie wejścia w ścieżkę /dashboard - lazy loading
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
