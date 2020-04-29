import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  value=0;
constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.value= +this.route.snapshot.paramMap.get('value');
  }

}