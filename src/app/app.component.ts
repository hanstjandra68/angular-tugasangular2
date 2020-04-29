import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  value="";
  constructor
    (private router:Router){}

  goInput(){
    this.router.navigate([
      '/input',this.value
    ]);
  }

  goDisplay(){
    this.router.navigate([
      '/display',this.value
    ]);
  }
}

