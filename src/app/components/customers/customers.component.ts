import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public customers: Customer[] = [];

  constructor(private _customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers ();
  }

  getCustomers () {
    this._customerService.getCustomers().subscribe((response: Customer[]) => {
      if (response['resultObject'].length > 0) {
        this.customers = response['resultObject'];
      }
    })
  }


}
