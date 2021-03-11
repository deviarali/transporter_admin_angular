import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DriverDetailsVo } from '../../models/driver-details-vo';
import { DriverService } from '../../services/driver-service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.scss']
})
export class CreateDriverComponent implements OnInit {

  driverForm: FormGroup;
  private driverDetailsVo: DriverDetailsVo = new DriverDetailsVo();
  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private driverService: DriverService,
              private router: Router) { }

  ngOnInit(): void {
    this.driverForm = this.formBuilder.group ({
      firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      lastName: [''],
      mobileNumber: ['', [Validators.required, Validators.maxLength(10)]],
      emailId: ['', [Validators.email]],
      gender: ['']
    })
  }

  get f() { return this.driverForm.controls; }
  
  onSubmit(): void {
    this.submitted = true;

    if(this.driverForm.invalid) {
      return;
    }
    console.log('Driver details ::: ', this.driverForm.value);
    this.driverService.saveDriver(this.driverForm.value).subscribe( response => {
      if(response["resultObject"] === "success") {
        this.router.navigateByUrl("/drivers");
      } else {

      }
    }, error => {

    })
  }

}
