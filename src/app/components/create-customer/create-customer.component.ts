import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private formBuilder: FormBuilder,
              private _customerService: CustomerService,
              private _router: Router) { }

  ngOnInit(): void {

    this.customerForm = this.formBuilder.group({
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

    console.log('Customer details::::', this.customerForm.value);

    this._customerService.saveCustomer(this.customerForm.value).subscribe(response => {
      if (response["resultObject"] === "success") {
        this._router.navigateByUrl("/customers");
      } else {
        //error block
      }
    }, error => {
      //error block
    })
  }

}
