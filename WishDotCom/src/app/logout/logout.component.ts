import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Service/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {

  }

//   public doRegistration(customer){
//     return this.http.post("http://localhost:9090/register",customer,{responseType:'text' as 'json'});
//   }
  
//   public registerNow(){
//     let resp=this.service.doRegistration(this.customer);
//    resp.subscribe((data)=>this.message=data);
//  }

// public checkLogin()
//   let resp = this.onsubmit[Symbol]
// }
 
// public doLogin(customer):Observable<any>{
//   return this.http.post("http://localhost:9090/login",customer,{responseType:'text' as 'json'});
// }

  ngOnInit() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }


}
