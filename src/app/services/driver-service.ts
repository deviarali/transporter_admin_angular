import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { DriverDetailsVo } from '../models/driver-details-vo'

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private httpClient: HttpClient) { }
  //private baseUrl: String = "http://139.59.42.229:8090/transporter/";
  private baseUrl: String = "http://localhost:50005/";
  private registerDriver : string = this.baseUrl + 'driver/registerDriver';
  private drivers : string = this.baseUrl + 'driver/drivers';
  private driverForVehicleRegister: string = this.baseUrl + '/drivers/registerVehicle/'
  private updateCustomerProfile: string = this.baseUrl + '/user/updateProfilePicture'

  public saveDriver(driverDetailsVo : DriverDetailsVo) {
    console.log('Save Driver details ', driverDetailsVo);
    
    return this.httpClient.post(this.registerDriver, driverDetailsVo);
  }

  public getDrivers() {
    return this.httpClient.get(this.drivers);
  }

  public getDriverDetailsForVehicleRegister(loggedInUser: string) {
    return this.httpClient.get(this.driverForVehicleRegister+loggedInUser);
  }

  public upload(file: File, mobileNumber: string) {
    const formData: FormData = new FormData();

    formData.append('file', file);

    formData.append('mobileNumber', mobileNumber);
    const req = new HttpRequest('POST', this.updateCustomerProfile, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    //req.params('mobileNumber', '555555')
    return this.httpClient.request(req);
    //return this.httpClient.post(this.updateCustomerProfile, file);
  }
}
