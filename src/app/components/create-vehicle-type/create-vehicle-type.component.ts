import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleTypeVo } from 'src/app/models/vehicle-type-vo';
import { UserVo } from 'src/app/models/user-vo';
import { DriverService } from 'src/app/services/driver-service';
import { VehicleTypesService } from 'src/app/services/vehicle-types.service';

@Component({
  selector: 'app-create-vehicle-type',
  templateUrl: './create-vehicle-type.component.html',
  styleUrls: ['./create-vehicle-type.component.scss']
})
export class CreateVehicleTypeComponent implements OnInit {

  vehicleTypeForm: FormGroup;
  vehicleType: VehicleTypeVo = new VehicleTypeVo();
  createdBy: UserVo = new UserVo();
  public submitted: boolean = false;
  loggedInUser = +localStorage.getItem('loggedInUser');
  errorMessage = '';
  successMessage = '';
  saveSuccess = false;
  error = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private vehicleTypeService: VehicleTypesService) { }

  ngOnInit(): void {
    this.vehicleType = history.state[0];
    this.vehicleTypeForm = this.formBuilder.group({
      id: [this.vehicleType.id],
      vehicleName: [this.vehicleType.vehicleName, Validators.required],
      size: [this.vehicleType.size, Validators.required],
     
      height: [this.vehicleType.height, Validators.required],
      width: [this.vehicleType.width, Validators.required],
      length: [this.vehicleType.length, Validators.required],
      price: [this.vehicleType.price, Validators.required],
      perKm: [this.vehicleType.perKm, Validators.required],
      minKm: [this.vehicleType.minKm, Validators.required]
    })
  }

  get f() { return this.vehicleTypeForm.controls; }

  onSubmit() {
    this.submitted = true;
    if(this.vehicleTypeForm.invalid) {
      return;
    }
    this.vehicleType = this.vehicleTypeForm.value;
    this.createdBy.id = this.loggedInUser;
    this.vehicleType.createdBy = this.createdBy;
    if(this.vehicleType.id == undefined || this.vehicleType.id == null) {
      this.saveVehicleType(this.vehicleType);
    } else {
      this.updateVehicleType(this.vehicleType);
    }
  }

  saveVehicleType(vehicleType: VehicleTypeVo) {
    this.vehicleTypeService.saveVehicleType(this.vehicleType).subscribe(response => {
      if(response['resultObject'] != null) {
        this.saveSuccess = true;
        this.successMessage = "Created Successfully";
        this.router.navigateByUrl('/vehicle-types');
      } else if(response['error'] != null) {
        this.error = true;
        this.errorMessage = "Vehicle type already exists";
        return;
      }
    }, err => {
      console.error("save error")
    })
  }
  
  updateVehicleType(vehicleType: VehicleTypeVo) {
    this.vehicleTypeService.updateVehicleType(this.vehicleType).subscribe(response => {
      if(response['resultObject'] != null) {
        this.saveSuccess = true;
        this.successMessage = "Created Successfully";
        this.router.navigateByUrl('/vehicle-types');
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
