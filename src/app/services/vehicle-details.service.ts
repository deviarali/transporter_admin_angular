import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DefaultService } from './default.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleDetailsService extends DefaultService
 {

  constructor(private _httpClient: HttpClient) { super(); }

  public getVehicles() {
    return this._httpClient.get(`${this.baseUrl}/vehicles`);
  }
}
