import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SmartDivComponent } from './smart-div/smart-div.component';
import { InsideComponent } from './inside/inside.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartDivComponent,
    InsideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
