import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Rx1Component } from './rx1/rx1.component';
import { Rx2Component } from './rx2/rx2.component';
import { Rx3Component } from './rx3/rx3.component';

@NgModule({
  declarations: [
    AppComponent,
    Rx1Component,
    Rx2Component,
    Rx3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
