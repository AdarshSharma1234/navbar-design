import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBar1Component } from './nav-bar1/nav-bar1.component';
import { NavBar2Component } from './nav-bar2/nav-bar2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBar1Component,
    NavBar2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
