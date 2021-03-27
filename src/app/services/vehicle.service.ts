import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DefaultService } from './default.service';
import {VehicleTypeVo} from 'src/app/models/vehicle-type-vo';
import { VehicleDetailsVo } from '../models/vehicle-details-vo';
@Injectable({
  providedIn: 'root'
})
export class VehicleService extends DefaultService {

  constructor(private httpClient: HttpClient) { super();}


 public  saveVehicle(vehicle : VehicleDetailsVo) {

  
    return this.httpClient.post(`${this.baseUrl}/vehicle/registerVehicle`,vehicle)

 
  }

  public updateVehicle(vehicleTypeVo:VehicleTypeVo){
    const vehicle ={
      vehicle : vehicleTypeVo
    }

 return this.httpClient.post(`${this.baseUrl}/../..`,vehicle)

  }

   //get Vehicle
   public getVehicle () {

    return this.httpClient.get(`${this.baseUrl}/.../...`);

  }

  public getDriversForVehicleRegistry(userId){

    return this.httpClient.get(`${this.baseUrl}/drivers/registerVehicle/`+userId);
  }

  public getVehivleTypes(){

    return this.httpClient.get(`${this.baseUrl}/vehicleType/getAllVehicleTypes/`);
  }
}
