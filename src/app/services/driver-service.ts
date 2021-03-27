import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DriverDetailsVo } from '../models/driver-details-vo'

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl: String = "http://139.59.42.229:8090/transporter/";
  private registerDriver : string = this.baseUrl + 'driver/registerDriver';
  private drivers : string = this.baseUrl + 'driver/drivers';

  public saveDriver(driverDetailsVo : DriverDetailsVo) {
    console.log('Save Driver details ', driverDetailsVo);
    const user = {
      user: driverDetailsVo
    }
    return this.httpClient.post(this.registerDriver, user);
  }

  public getDrivers() {
    return this.httpClient.get(this.drivers);
  }

  public getDriversForVehicleRegistry(userId){

    return this.httpClient.get(`${this.baseUrl}/drivers/registerVehicle/`,userId);
  }

}
