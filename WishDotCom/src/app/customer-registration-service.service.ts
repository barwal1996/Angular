import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class CustomerRegistationService {
    private baseUrl='http://localhost:9090';
    constructor(private http:HttpClient) { }


  public doRegistration(customer){
    return this.http.post("http://localhost:9090/register",customer,{responseType:'text' as 'json'});
  }

  getCustomers(phoneNo: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${phoneNo}`);
    }



  //  getCustomerByphoneNo(phoneNo:number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${phoneNo}`);

  // }

  public deleteUser(phoneNo:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${phoneNo}`);
 
}
getCustomerByphoneNo(phoneNo:number): Observable<any> {
  return this.http.get(`${this.baseUrl}/${phoneNo}`);

}


public doLogin(customer):Observable<any>{
  return this.http.post("http://localhost:9090/login",customer,{responseType:'text' as 'json'});
}
  }
  
  

