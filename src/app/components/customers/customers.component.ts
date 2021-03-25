import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from "angular-datatables";

import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
declare let $: any;

@Component({
  selector: 'customers.component',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent implements OnInit {

  // @ViewChild('closebutton') closebutton: ElementRef;

  public customers = [];
  public oldCustomers = [];
  public bannedCustomers = [];
  closeResult = '';
  errorMessage = '';
  alertMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private _customerService: CustomerService,
    private modalService: NgbModal,
    private _router: Router) {
  }


  dtOptions: any = {};
  customerDtOptions: any = {};
  // customerForm: FormGroup;
  public customer: Customer = new Customer();
  public submitted: boolean = false;

  customerForm = new FormGroup({

    id: new FormControl(''),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(''),
    mobileNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    emailId: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', Validators.required),

  });



  async ngOnInit() {

    // this.initializeCustomerForm();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      lengthMenu: [8, 16, 24, 32],
      processing: true
    };
    this.customerDtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      lengthMenu: [8, 16, 24, 32],
      processing: true
    };

    await this.getCustomers();

  }


  initializeCustomerForm() {
    this.customerForm = this.formBuilder.group({
      id: [''],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: [''],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      emailId: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
    })
  }

  async getCustomers() {
    await this._customerService.getCustomers().subscribe((response) => {
      if (response['resultObject'].length > 0) {
        this.customers = response['resultObject'];
        this.oldCustomers = response['resultObject'];
        this.bannedCustomers = response['resultObject'];
      }
    });
  }

  resetFormValue() {

    this.customerForm.reset({});
    // this.customerForm.reset({firstName: '', lastName: '', mobileNumber: '', emailId: '', gender: ''});
    // this.form.reset({name: '', email: '', body: ''});

  }

  setCustomerValue(customer) {

    this.customerForm.setValue({ id: customer.id, firstName: customer.user.firstName, lastName: customer.user.lastName, mobileNumber: customer.user.mobileNumber, emailId: customer.user.emailId, gender: customer.user.gender });

  }
  get f() { return this.customerForm.controls; }

  onSubmitCustomerForm(): void {

    this.errorMessage = '';
    this.submitted = true;

    if (this.customerForm.invalid) {
      return;
    }

    // console.log('Customer details::::', this.customerForm.value);
    let customerToSave = this.customerForm.value;
    if(customerToSave != null) {
      if(customerToSave.id != null && customerToSave.id.length > 0) {
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
        // this.closebutton.nativeElement.click();
        this.getCustomers();
        document.getElementById("closebutton").click();
        this.resetFormValue();
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
        // this.closebutton.nativeElement.click();
        this.getCustomers();
        document.getElementById("closebutton").click();
        this.resetFormValue();
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
    this.getCustomers();
  }

  copyCustomer(id): void {
    alert('copy customer API call goes here');
    this.getCustomers();
  }

  open(content) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openUpdateCustomer(content, customerId) {

    if (this.customers != null) {
      let customer = this.customers.filter(xx => xx.id === customerId)
      // console.log(customer[0]);
      this.setCustomerValue(customer[0]);
    }

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openConfirmModal(confirmModal, customerId) {

    this.modalService.open(confirmModal, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
      this.deleteCustomer(customerId);
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public data = [
    { name: 'Ajay', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'Jas', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'Jas', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'Jas', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost 1', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost 2', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'Jas', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'Jas', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'Jas', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
  ];

}
