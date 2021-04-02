import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleDetailsVo } from 'src/app/models/vehicle-details-vo';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Router, RouterEvent } from '@angular/router';
import { DriverDetailsVo } from 'src/app/models/driver-details-vo';
import { DriverService } from 'src/app/services/driver-service';
import { VehicleTypeVo } from 'src/app/models/vehicle-type-vo';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss'],
})
export class CreateVehicleComponent implements OnInit {
  vehicleForm: FormGroup;
  public vehicle: VehicleDetailsVo = new VehicleDetailsVo();
  public driverDetails: DriverDetailsVo = new DriverDetailsVo();
  public vehicleTypeVo: VehicleTypeVo = new VehicleTypeVo();

  public submitted: boolean = false;
  errorMessage = '';

  public driverList: DriverDetailsVo[];

  public vehicleTypeList: VehicleTypeVo[];

  public loggedInUser = localStorage.getItem('loggedInUser');

  constructor(
    private formBuilder: FormBuilder,
    private _vehicleService: VehicleService,
    private _router: Router,
    private driverService: DriverService
  ) { }

  ngOnInit(): void {
    this.vehicle = history.state[0];
    console.log('this.vehicle', this.vehicle);
    if (this.vehicle === undefined || this.vehicle === null) {
      this.vehicle = new VehicleDetailsVo();
    }

    this.vehicleForm = this.formBuilder.group({
      vehicleColor: [this.vehicle.vehicleColor],
      vehicleModel: [this.vehicle.vehicleModel, Validators.required],
      vehicleNumber: [this.vehicle.vehicleNum, [Validators.required, Validators.minLength(4)],],
      vehicleTypeVo: [this.vehicle.vehicleTypeVo, [Validators.required]],
      createdBy: [this.vehicle.createdBy],
      drivers: [this.vehicle.driverDetails, Validators.required],
    });

    this.getDriverForVehicle(this.loggedInUser);
    this.getVehicleTypes();
  }

  get v() {
    return this.vehicleForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.vehicleForm.invalid) {
      return;
    }

    this.vehicle = this.vehicleForm.value;
    this.vehicle.vehicleNum = this.vehicleForm.value.vehicleNumber;
    this.driverDetails.id = +this.vehicleForm.value.drivers;
    this.vehicle.driverDetails = this.driverDetails;
    this.vehicleTypeVo.id = this.vehicleForm.value.vehicleTypeVo;
    this.vehicle.vehicleTypeVo = this.vehicleTypeVo;
    this.vehicle.createdBy = this.loggedInUser;
    console.log('Vehicle details::this.PostAPIDetails::', this.vehicle);

    if (this.vehicle != null) {
      if (this.vehicle.vehicleNum != null && this.vehicle.vehicleNum != '') {
        this.updateVehivle(this.vehicle);
      } else {
        this.saveVehicle(this.vehicle);
      }
    }
  }

  updateVehivle(vehicle) {
    this._vehicleService.updateVehicle(vehicle).subscribe(
      (response) => {
        //console.log(response);
        if (response['resultObject'] === 'success') {
          this._router.navigateByUrl('/vehicle-details');
        } else {
          //error block

          if (response['error'] != null) {
            this.errorMessage = response['error']['message'];
          }
        }
      },
      (error) => {
        //error bloxk
      }
    );
  }

  saveVehicle(vehicle: VehicleDetailsVo) {
    this._vehicleService.saveVehicle(vehicle).subscribe(
      (response) => {
        console.log(response);
        if (response['resultObject'] == 'success') {
          this._router.navigateByUrl('/vehicle-details');
        } else {
          if (response['error'] != null) {
            this.errorMessage = response['error']['message'];
          }
        }
      },
      (error) => {
        //erro block
      }
    );
  }

  deleteVehicle(vehicleNumber): void {
    alert('delete customer API call goes here');
    this._router.navigateByUrl('/vehicle');
  }

  copyVehicle(vehicleNumber): void {
    alert('copy customer API call goes here');
    this._router.navigateByUrl('/vehicle');
  }

  getDriverForVehicle(userId) {
    console.log('userId', userId);

    this._vehicleService
      .getDriversForVehicleRegistry(userId)
      .subscribe((data) => {
        console.log('getDriverForVehicleby User Id', data['resultObject']);

        this.driverList = data['resultObject'];

        console.log('this.driverList', this.driverList);
      });
  }

  getVehicleTypes() {
    this._vehicleService.getVehivleTypes().subscribe((data) => {
      this.vehicleTypeList = data['resultObject'];
      console.log('Vehicle Types', this.vehicleTypeList);
    });
  }
}
