import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  private num1 : number;
  private num2 : number;
 
  add(num1, num2):number{
  return (num1 + num2);
  }
 
  subtract(num1, num2) : number{
  return (num1 - num2);
  }
 
  multiply(num1, num2): number{
  return (num1 * num2);
  }
 
  divide(num1, num2):any {
  if(num2 < 0){
  return "it should not be 0";
  }
  else{
  return (num1/num2);
  }
  } 

}
