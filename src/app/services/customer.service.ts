import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Customer } from "../models/customer";
import { DefaultService } from './default.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends DefaultService {

  // public baseUrl: string = "http://139.59.42.229:8090/transporter";

  constructor(private _httpClient: HttpClient) {super(); }

  public saveCustomer (customer: Customer) {
    // console.log('printing customer in service', customer);
    const user = {
      user: customer
    }
    return this._httpClient.post(`${this.baseUrl}/customer/registerCustomer`, user);
  }

  public updateCustomer (customer: Customer) {
    // console.log('printing customer in service', customer);
    const user = {
      user: customer
    }
    return this._httpClient.put(`${this.baseUrl}/customer/updateCustomer`, user);
  }

  //get customer
  public getCustomers () {
    return this._httpClient.get(`${this.baseUrl}/customer/customers`);
  }
}