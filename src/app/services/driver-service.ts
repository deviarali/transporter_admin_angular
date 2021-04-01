import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DriverDetailsVo } from '../models/driver-details-vo'
import { CustomerService } from './customer.service';
import { CustomerDetailsVo } from '../models/customer-details-vo';
import { VehicleTypeVo } from '../models/vehicle-type-vo';
import { Observable } from 'rxjs';
import { rendererTypeName } from '@angular/compiler';
import { retry, delayWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  customers: CustomerDetailsVo[];
  constructor(private httpClient: HttpClient,
    private customerService: CustomerService) { }

  private baseUrl: String = "http://139.59.42.229:8090/transporter/";
  private registerDriver : string = this.baseUrl + 'driver/registerDriver';
  private drivers : string = this.baseUrl + 'driver/getAllDrivers';
  private updateVerification = this.baseUrl + 'driver/updateverificationstatus';  

  public saveDriver(driverDetailsVo : DriverDetailsVo) {
    console.log('Save Driver details ', driverDetailsVo);
    const user = {
      user: driverDetailsVo
    }
    return this.httpClient.post(this.registerDriver, driverDetailsVo);
  }

  public getDrivers() {
    return this.httpClient.get(this.drivers).pipe(
      retry(5)
    );
  }

  public updateVerificationStatus(id: Number, status: string) {
    return this.httpClient.put(this.updateVerification+'?driverId='+id+'&status='+status, null);
  }

  public getDriversForVehicleRegistry(userId){

    return this.httpClient.get(`${this.baseUrl}/drivers/registerVehicle/`,userId);
  }

  public findDriverDocuments(driverId){

    // return this.httpClient.get(`${this.baseUrl}/drivers/registerVehicle/`,userId);

    return [
      { slNo: 1, documentType: 'Aadhar', documentId: '1234-1234-1234', documentPicture: 'https://images.moneycontrol.com/static-mcnews/2019/05/Aadhaar-moneycontrol-770x433.jpg?impolicy=website&width=770&height=431', status: 'Verified', verifiedBy: 'Devappa', mobile: '9999999999', comments: 'Comments goes here...' },
      { slNo: 2, documentType: 'Aadhar', documentId: '1234-1234-1234', documentPicture: null, status: 'Verified', verifiedBy: 'Devappa', mobile: '9999999999', comments: 'Comments goes here...' },
      { slNo: 3, documentType: 'Aadhar', documentId: '1234-1234-1234', documentPicture: 'https://images.moneycontrol.com/static-mcnews/2019/05/Aadhaar-moneycontrol-770x433.jpg?impolicy=website&width=770&height=431', status: 'Verified', verifiedBy: 'Devappa', mobile: '9999999999', comments: 'Comments goes here...' },
      { slNo: 4, documentType: 'Aadhar', documentId: '1234-1234-1234', documentPicture: null, status: 'Verified', verifiedBy: 'Devappa', mobile: '9999999999', comments: 'Comments goes here...' },
      { slNo: 5, documentType: 'Aadhar', documentId: '1234-1234-1234', documentPicture: 'https://images.moneycontrol.com/static-mcnews/2019/05/Aadhaar-moneycontrol-770x433.jpg?impolicy=website&width=770&height=431', status: 'Verified', verifiedBy: 'Devappa', mobile: '9999999999', comments: 'Comments goes here...' },
    ]
  }

  public findDriverRides(driverId) {

    // return this.httpClient.get(`${this.baseUrl}/drivers/registerVehicle/`,userId);

    return [
      { rideDate: '03-30-2021', rideFrom: 'Vijaya Nagar', rideTo: 'Maratha Halli', spent: '500.0', ratings: '5 stars', customer: {id:1, name: 'Devappa'} },
      { rideDate: '03-30-2021', rideFrom: 'Vijaya Nagar', rideTo: 'Maratha Halli', spent: '500.0', ratings: '5 stars', customer: {id:1, name: 'Devappa'} },
      { rideDate: '03-30-2021', rideFrom: 'Vijaya Nagar', rideTo: 'Maratha Halli', spent: '500.0', ratings: '5 stars', customer: {id:1, name: 'Devappa'} },
      { rideDate: '03-30-2021', rideFrom: 'Vijaya Nagar', rideTo: 'Maratha Halli', spent: '500.0', ratings: '5 stars', customer: {id:1, name: 'Devappa'} },
      { rideDate: '03-30-2021', rideFrom: 'Vijaya Nagar', rideTo: 'Maratha Halli', spent: '500.0', ratings: '5 stars', customer: {id:1, name: 'Devappa'} },
    ]
  }

  public findDriverRidesCancelled(driverId) {

    // return this.httpClient.get(`${this.baseUrl}/drivers/registerVehicle/`,userId);

    return [
      { date: '03-30-2021', reason: 'reason Goes here', spent: '500.00'},
      { date: '03-30-2021', reason: 'reason Goes here', spent: '500.00'},
      { date: '03-30-2021', reason: 'reason Goes here', spent: '500.00'},
      { date: '03-30-2021', reason: 'reason Goes here', spent: '500.00'},
      { date: '03-30-2021', reason: 'reason Goes here', spent: '500.00'},
    ]
  }

  public findDriverComplaints(driverId) {

    // return this.httpClient.get(`${this.baseUrl}/drivers/registerVehicle/`,userId);

    return [
      { date: '03-30-2021', issue: 'issue Goes here', status: 'SOlved'},
      { date: '03-30-2021', issue: 'issue Goes here', status: 'SOlved'},
      { date: '03-30-2021', issue: 'issue Goes here', status: 'SOlved'},
      { date: '03-30-2021', issue: 'issue Goes here', status: 'SOlved'},
      { date: '03-30-2021', issue: 'issue Goes here', status: 'SOlved'},
      { date: '03-30-2021', issue: 'issue Goes here', status: 'SOlved'},
    ]
  }


}
