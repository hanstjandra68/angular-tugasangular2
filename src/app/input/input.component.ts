import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  value="";
  ngOnInit() {
    this.value=this.route.snapshot.paramMap.get('value');
  }
  satu(){
    this.value = this.value.concat("1");
  }
  dua(){
    this.value = this.value.concat("2");
  }
  tiga(){
    this.value = this.value.concat("3");
  }
  empat(){
    this.value = this.value.concat("4");
  }
  lima(){
    this.value = this.value.concat("5");
  }
  enam(){
    this.value = this.value.concat("6");
  }
  tujuh(){
    this.value = this.value.concat("7");
  }
  delapan(){
    this.value = this.value.concat("8");
  }
  sembilan(){
    this.value = this.value.concat("9");
  }
  tambah(){
    this.value = this.value.concat("+");
  }
  kurang(){
    this.value = this.value.concat("-");
  }
  kali(){
    this.value = this.value.concat("*");
  }
  samadengan(){
    var angka = +this.value;
    console.log(angka);
    this.value = angka.toString();
  }
}