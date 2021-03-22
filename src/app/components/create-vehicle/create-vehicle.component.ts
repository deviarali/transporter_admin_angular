import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VehicleDetailsVo } from 'src/app/models/vehicle-details-vo';
import { Router } from '@angular/router';
import { DriverDetailsVo } from 'src/app/models/driver-details-vo';
import { DriverService } from 'src/app/services/driver-service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent implements OnInit {

  public vehicleForm: FormGroup;
  public vehicleDetail: VehicleDetailsVo = new VehicleDetailsVo();
  public driverDetails: DriverDetailsVo[];
  private driverDetail: DriverDetailsVo = new DriverDetailsVo();
  loggedInUser: string = localStorage.getItem('loggedInUser');
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private driverService : DriverService) { }

  ngOnInit(): void {
    
    this.vehicleDetail.driverDetails = this.driverDetail;
    this.vehicleForm = this.formBuilder.group({
      vehicleNum: [this.vehicleDetail.vehicleName, ''],
      vehicleName: [this.vehicleDetail.vehicleName, ''],
      vehicleModel: [this.vehicleDetail.vehicleModel, ''],
      vehicleColor: [this.vehicleDetail.vehicleColor, ''],
      driverDetail: [this.vehicleDetail.driverDetails.id, '']
    })
    this.getDriverDetailsForVehicleRegister();
  }

  onSubmit() {
    if(this.vehicleForm.invalid) {
      return;
    }
   // this.driverForm.setValue(this.driverDetailsVo.createdBy.)
  //  this.driverDetailsVo.createdBy = this.createdBy;
  //  this.driverDetailsVo.createdBy.id = +this.loggedInUser;

  //  this.user.gender = this.driverForm.controls['gender'].value;
  //  this.user.firstName = this.driverForm.controls['firstName'].value;
  //  this.user.lastName = this.driverForm.controls['lastName'].value;
  //  this.user.mobileNumber = this.driverForm.controls['mobileNumber'].value;
  //  this.user.emailId = this.driverForm.controls['emailId'].value;
   
  //  this.driverDetailsVo.user = this.user;
  //  console.log('Driver details from driver vo ', this.driverDetailsVo);
  //   console.log('Driver details ::: ', this.driverForm.value);
  //   this.driverService.saveDriver(this.driverDetailsVo).subscribe( response => {
  //     if(response["resultObject"] === "success") {
  //       this.router.navigateByUrl("/drivers");
  //     } else {

  //     }
  //   }, error => {

  //   })
  }
  
  getDriverDetailsForVehicleRegister() { 
    this.driverService.getDriverDetailsForVehicleRegister(this.loggedInUser).subscribe ( (response: DriverDetailsVo[]) => {
      this.driverDetails = response['resultObject'];
    });
  };
}
