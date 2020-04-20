import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

xdescribe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  


  beforeEach(() => {
    
    component = new CalculatorComponent();
   
  })
  afterEach(() =>{
  component=null;
  })

    it('should return addition of 2 numbers',() =>{
      // let component:CalculatorComponent;
      expect(component.add(10,10)).toEqual(20);
    });
    it('should return difference of 2 numbers',() =>{
    //  let component:CalculatorComponent;
     expect(component.subtract(10,10)).toEqual(0);
   });
   it('should return multiplication of 2 numbers',() =>{
    //  let component:CalculatorComponent;
     expect(component.multiply(10,10)).toEqual(100);
   });
   it('should return division of 2 numbers',() =>{
    //  let component:CalculatorComponent;
     expect(component.divide(10,10)).toEqual(1);
   });
    });
