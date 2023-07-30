import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageTopComponent } from './MyComponents/page-top/page-top.component';
import { PageMiddleComponent } from './MyComponents/page-middle/page-middle.component';

@NgModule({
  declarations: [
    AppComponent,
    PageTopComponent,
    PageMiddleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
