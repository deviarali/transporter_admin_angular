import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Customer } from "../models/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public baseUrl: string = "http://139.59.42.229:8090/transporter";

  constructor(private _httpClient: HttpClient) { }

  public saveCustomer (customer: Customer) {
    console.log('printing customer in service', customer);
    const user = {
      user: customer
    }
    return this._httpClient.post(`${this.baseUrl}/customer/registerCustomer`, user);
  }

  //get customer
  public getCustomers () {
    return this._httpClient.get(`${this.baseUrl}/customer/customers`);
  }
}