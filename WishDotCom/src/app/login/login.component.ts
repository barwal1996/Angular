import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Service/authentication.service';
import { Customer } from '../customer';
import { CustomerRegistationService } from '../customer-registration-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  phoneNo = ''
  password = ''
  invalidLogin = false

  customer: Customer=new Customer();
  message:any;
  constructor(private router: Router,
    private loginservice: CustomerRegistationService) { }

  ngOnInit() {
  }
  public checkLogin(){
    let resp=this.loginservice.doLogin(this.customer);
   resp.subscribe((data)=>this.message=data);
 }
  // checkLogin() {
  //   if (this.loginservice.authenticate(this.phoneNo, this.password)
  //   ) {
  //     this.router.navigate([''])
  //     this.invalidLogin = false
  //   } else
  //     this.invalidLogin = true
  // }
//   public registerNow(){
//     let resp=this.service.doRegistration(this.customer);
//    resp.subscribe((data)=>this.message=data);
//  }


}