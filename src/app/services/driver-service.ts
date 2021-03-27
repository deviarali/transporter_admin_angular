import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DriverDetailsVo } from '../models/driver-details-vo'
import { CustomerService } from './customer.service';
import { CustomerDetailsVo } from '../models/customer-details-vo';
import { VehicleTypeVo } from '../models/vehicle-type-vo';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  customers: CustomerDetailsVo[];
  constructor(private httpClient: HttpClient,
    private customerService: CustomerService) { }

  //private baseUrl: String = "http://139.59.42.229:8090/transporter/";
  private baseUrl: String = "http://localhost:50005/";
  private registerDriver : string = this.baseUrl + 'driver/registerDriver';
  private drivers : string = this.baseUrl + 'driver/getAllDrivers';
  private registerVehicleType = this.baseUrl + 'vehicleType/addVehicleType';

  public saveDriver(driverDetailsVo : DriverDetailsVo) {
    console.log('Save Driver details ', driverDetailsVo);
    const user = {
      user: driverDetailsVo
    }
    return this.httpClient.post(this.registerDriver, driverDetailsVo);
  }

  public getDrivers() {
    return this.httpClient.get(this.drivers);
  }

  public saveVehicleType(vehicleType : VehicleTypeVo) {
    
    return this.httpClient.post(this.registerVehicleType, vehicleType);
  }

}
