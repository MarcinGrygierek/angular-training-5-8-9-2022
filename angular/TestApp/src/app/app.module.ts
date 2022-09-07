import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TextFormatterComponent } from './text-formatter/text-formatter.component';
import { NumberFormatterComponent } from './number-formatter/number-formatter.component';
import { SuperButtonComponent } from './super-button/super-button.component';
import { EmitterButtonComponent } from './emitter-button/emitter-button.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TextFormatterComponent,
    NumberFormatterComponent,
    SuperButtonComponent,
    EmitterButtonComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
