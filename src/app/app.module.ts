import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputComponent } from './input/input.component';
import { DisplayComponent } from './display/display.component';

import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes=[
  {path:'input/:value', component: InputComponent},
  {path:'display/:value', component: DisplayComponent}
] 

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES) 
    ],
  declarations: [ AppComponent, HelloComponent, InputComponent, DisplayComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
