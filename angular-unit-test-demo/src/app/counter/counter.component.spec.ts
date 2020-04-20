import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

// describe('CounterComponent', () => {
//   let component: CounterComponent;
//   // let fixture: ComponentFixture<CounterComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CounterComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     // fixture = TestBed.createComponent(CounterComponent);
//     // component = fixture.componentInstance;
   
//   });
  // 1. describe - define test suite, Create a group of specs (often called a suite)
describe('CounterComponent', ()=> {

  // 2. it - define an individual unit test case
  it ('should check incremented value is greater than zero', ()=> {
  
  // dependency injection
  let counterComponent: CounterComponent = new CounterComponent();
 
  const curCounterValue = counterComponent.increaseCounter();
 
  // 3. expect - Create an expectation/assertion for a spec
  expect(curCounterValue).toBeGreaterThan(0);
 
  })  });
 

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
// });

