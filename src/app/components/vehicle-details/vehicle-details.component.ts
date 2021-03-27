import { Component, OnInit } from '@angular/core';
import {VehicleDetailsService} from 'src/app/services/vehicle-details.service';
@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

  public vehicles = [];

  constructor(
    public vehicleDetailsService:VehicleDetailsService,
  ) { }

  dtOptions: any = {};
  vehicleDtOptions: any = {};

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      lengthMenu: [8, 16, 24, 32],
      processing: true
    };
    this.vehicleDtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      lengthMenu: [8, 16, 24, 32],
      processing: true
    };

  }
  async getVehicles() {
    await this.vehicleDetailsService.getVehicles().subscribe((response) => {
      if (response['resultObject'].length > 0) {
      // this.customers = response['resultObject'];

      }
    });
  }

}
