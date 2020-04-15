import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerRegistationService } from '../customer-registration-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
 
  customer: Customer=new Customer();
  message:any;
 
  constructor(private service:CustomerRegistationService) { }

  ngOnInit() {
  }

  public registerNow(){
     let resp=this.service.doRegistration(this.customer);
    resp.subscribe((data)=>this.message=data);
  }

}
