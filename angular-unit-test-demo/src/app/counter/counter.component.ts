import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public counter: number = 0;

 // increment
 public increaseCounter(): number {

 this.counter++;

 return this.counter;

 }

 // decrement
 public decreaseCounter(): number {

 this.counter--;

 return this.counter;

 }


}
