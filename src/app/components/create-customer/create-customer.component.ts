import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { Customer } from "../../models/customer";
import { CustomerService } from "../../services/customer.service";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;
  public customer: Customer = new Customer();
  public submitted: boolean = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder,
    private _customerService: CustomerService,
    private _router: Router,) { }

    user = null;
    
      
  ngOnInit(): void {

    this.customer = history.state[0];
    if( this.customer === undefined || this.customer === null) {
      this.customer = new Customer();
    }

    this.customerForm = this.formBuilder.group({
      id: [this.customer.id],
      firstName: [this.customer.firstName, [Validators.required,
      Validators.minLength(3)]],
      lastName: [this.customer.lastName],
      mobileNumber: [this.customer.mobileNumber, [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)]],
      emailId: [this.customer.emailId, [Validators.required,
      Validators.email]],
      gender: [this.customer.gender, Validators.required],
    })
  }

  get f() { return this.customerForm.controls; }

  onSubmit(): void {

    this.submitted = true;

    if (this.customerForm.invalid) {
      return;
    }

     // console.log('Customer details::::', this.customerForm.value);
     let customerToSave = this.customerForm.value;
     if(customerToSave != null) {
       if(customerToSave.id != null && customerToSave.id > 0) {
         this.updateCustomer(customerToSave);
       }
       else {
         this.saveCustomer(customerToSave);
       }
     }
  }



  saveCustomer(customer) {
    this._customerService.saveCustomer(customer).subscribe(response => {
      // console.log(respons);
      if (response["resultObject"] === "success") {
        this._router.navigateByUrl("/customers")
      } else {
        //error block
        if (response["error"] != null) {
          this.errorMessage = response["error"]["message"];
        }
      }
    }, error => {
      //error block
    })
  }

  updateCustomer(customer) {
    this._customerService.updateCustomer(customer).subscribe(response => {
      // console.log(respons);
      if (response["resultObject"] === "success") {
        this._router.navigateByUrl("/customers")

      } else {
        //error block
        if (response["error"] != null) {
          this.errorMessage = response["error"]["message"];
        }
      }
    }, error => {
      //error block
    })
  }

  deleteCustomer(id): void {
    alert('delete customer API call goes here');
    this._router.navigateByUrl("/customers")
  }

  copyCustomer(id): void {
    alert('copy customer API call goes here');
    this._router.navigateByUrl("/customers")
  }  

}
