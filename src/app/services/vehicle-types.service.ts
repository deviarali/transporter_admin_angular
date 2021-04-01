import { Injectable } from '@angular/core';
import { DefaultService } from './default.service';
import { HttpClient } from '@angular/common/http';
import { VehicleTypeVo } from '../models/vehicle-type-vo';

@Injectable({
  providedIn: 'root'
})
export class VehicleTypesService extends DefaultService {

  private registerVehicleType = this.baseUrl + '/vehicleType/addVehicleType';
  private getVehicleType = this.baseUrl + '/vehicleType/getAllVehicleTypes';
  private updateVehicleTypes = this.baseUrl + '/vehicleType/update';

  constructor(private httpClient: HttpClient) { super() }

  public saveVehicleType(vehicleType : VehicleTypeVo) {
    
    return this.httpClient.post(this.registerVehicleType, vehicleType);
  }

  public getVehicleTypes() {
    return this.httpClient.get(this.getVehicleType);
  }

  public updateVehicleType(vehicleType: VehicleTypeVo) {
    return this.httpClient.put(this.updateVehicleTypes, vehicleType);
  }

}