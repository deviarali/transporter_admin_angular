import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DriverDetailsVo } from '../../models/driver-details-vo';
import { DriverService } from '../../services/driver-service'
import { Router } from '@angular/router';
import { UserVo } from 'src/app/models/user-vo';

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.scss']
})
export class CreateDriverComponent implements OnInit {

  driverForm: FormGroup;
  driverDetails: DriverDetailsVo = new DriverDetailsVo();
  user: UserVo = new UserVo();
  createdBy: UserVo = new UserVo();
  public submitted: boolean = false;
  errorMessage = '';
  successMessage = '';
  saveSuccess = false;
  error = false;
  loggedInUser = +localStorage.getItem('loggedInUser');
  constructor(private formBuilder: FormBuilder,
    private driverService: DriverService,
    private router: Router) { }

  ngOnInit(): void {
    this.driverDetails = history.state[0];
    if (this.driverDetails === undefined || this.driverDetails === null) {
      this.driverDetails = new DriverDetailsVo();
    }
    this.driverDetails.user = this.user;
    this.driverForm = this.formBuilder.group({
      id: [this.driverDetails.id],
      firstName: [this.driverDetails.user.firstName, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      lastName: [this.driverDetails.user.lastName, [Validators.pattern('[A-Za-z]*')]],
      
      mobileNumber: ['', [Validators.required, Validators.maxLength(10)]],
      emailId: ['', [Validators.email]],
      gender: [''],
      addressState: ['', ''],
      addressCity: ['', ''],
      addressStreet: ['', ''],
      addressZipcode: ['', '']
    })
  }

  get f() { return this.driverForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.driverForm.invalid) {
      return;
    }
    this.driverDetails = this.driverForm.value;
    this.user.firstName=this.driverForm.value.firstName;
    this.user.lastName=this.driverForm.value.lastName;
    this.user.mobileNumber=this.driverForm.value.mobileNumber;
    this.user.emailId=this.driverForm.value.emailId;
    this.user.gender=this.driverForm.value.gender;
    this.driverDetails.user = this.user;
    this.createdBy.id = this.loggedInUser;
    this.driverDetails.createdBy = this.createdBy;
    if (this.driverDetails != null) {
      if (this.driverDetails.id != null && this.driverDetails.id > 0) {
        //this.updateDriver(driverToSave);
      }
      else {
        this.saveDriver(this.driverDetails);
      }
    }
  }

  saveDriver(driverDetails) {
    console.log('Driver details ::: ', this.driverForm.value);
    this.driverService.saveDriver(this.driverDetails).subscribe(response => {
      if (response["resultObject"] === "success") {
        this.saveSuccess = true;
        this.router.navigateByUrl("/vehicle-create");
      } else {
        if (response["error"] != null) {
          this.error = true;
          this.errorMessage = response["error"]["message"];
        }
      }
    }, error => {

    })
  }

}
