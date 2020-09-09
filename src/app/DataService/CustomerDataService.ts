import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/Models/Customer'
import { ROOT_URL } from 'src/Models/Config'
import { Observable } from 'rxjs';
@Injectable()
export class CustomerDataService {
  customers: Observable<Customer[]>;
  newcustomer: Customer;
  constructor(private http: HttpClient) {

  }

  getCustomer() {
    return this.http.get<Customer[]>(ROOT_URL + '/customers/list/');
  }

  AddCustomer(cust: Customer) {

    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      fname: cust.firstname, lname: cust.lastname, email: cust.email, gender: cust.gender
    }
    console.log(ROOT_URL);

    return this.http.post<Customer>(ROOT_URL + '/customer/create/', body, { headers });

  }

  ///
  EditCustomer(cust: Customer) {
    //const params = new HttpParams().set('ID', cust.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      fname: cust.firstname, lname: cust.lastname, email: cust.email, ID: cust.id
      , gender: cust.gender
    }
   
    return this.http.put<Customer>(ROOT_URL + '/customer/update/' + cust.id, body, { headers })

  }

  
  DeleteCustomer(cust: Customer) {
    const params = new HttpParams().set('ID', cust.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      fname: cust.firstname, lname: cust.lastname, email: cust.email, id: cust.id
    }
    return this.http.delete<Customer>(ROOT_URL + '/customer/delete/' + cust.id)

  }


}




