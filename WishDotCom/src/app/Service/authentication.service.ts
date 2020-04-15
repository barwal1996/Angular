import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../customer';

@Injectable({
    providedIn: 'root'
  })
    export class AuthenticationService{

        constructor() { }
      
        authenticate(phoneNo, password) {
          if (phoneNo === "" && password === "password") {
            sessionStorage.setItem('phoneNo', phoneNo)
            return true;
          } else {
            return false;
          }
        }
      
        isUserLoggedIn() {
          let customer = sessionStorage.getItem('phoneNo')
          console.log(!(customer === null))
          return !(customer === null)
        }
        isCustomerLoggedIn() {
          let customer = sessionStorage.getItem('phoneNo')
          console.log(!(customer === null))
          return !(customer === null)
        }
        logOut() {
          sessionStorage.removeItem('phoneNo')
        }
      }
      
       
      