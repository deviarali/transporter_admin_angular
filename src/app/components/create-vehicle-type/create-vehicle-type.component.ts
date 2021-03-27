import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleTypeVo } from 'src/app/models/vehicle-type-vo';
import { UserVo } from 'src/app/models/user-vo';
import { DriverService } from 'src/app/services/driver-service';

@Component({
  selector: 'app-create-vehicle-type',
  templateUrl: './create-vehicle-type.component.html',
  styleUrls: ['./create-vehicle-type.component.scss']
})
export class CreateVehicleTypeComponent implements OnInit {

  vehicleTypeForm: FormGroup;
  vehicleType: VehicleTypeVo = new VehicleTypeVo();
  createdBy: UserVo = new UserVo();
  loggedInUser = +localStorage.getItem('loggedInUser');
  errorMessage = '';
  successMessage = '';
  saveSuccess = false;
  error = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private driverService: DriverService) { }

  ngOnInit(): void {
    this.vehicleTypeForm = this.formBuilder.group({
      id: [this.vehicleType.id],
      vehicleName: ['', Validators.required],
      size: ['', Validators.required],
      height: ['', Validators.required],
      width: ['', Validators.required],
      length: ['', Validators.required],
      price: ['', Validators.required],
      perKm: ['', Validators.required],
      minKm: ['', Validators.required]
    })
  }

  onSubmit() {
    
    if(this.vehicleTypeForm.invalid) {
      return;
    }
    this.vehicleType = this.vehicleTypeForm.value;
    this.createdBy.id = this.loggedInUser;
    this.vehicleType.createdBy = this.createdBy;
    this.driverService.saveVehicleType(this.vehicleType).subscribe(response => {
      if(response['resultObject'] != null) {
        this.saveSuccess = true;
        this.successMessage = "Created Successfully";
        this.router.navigateByUrl('/drivers');
      } else if(response['error'] != null) {
        this.error = true;
        this.errorMessage = "Vehicle type already exists";
        return;
      }
    }, err => {
      console.error("save error")
    })
  }

}
