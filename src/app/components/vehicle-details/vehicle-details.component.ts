import { Component, OnInit } from '@angular/core';
import { VehicleDetailsVo } from 'src/app/models/vehicle-details-vo';
import { VehicleDetailsService } from 'src/app/services/vehicle-details.service';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss'],
})
export class VehicleDetailsComponent implements OnInit {
  constructor(public vehicleDetailsService: VehicleDetailsService) {}

  vehicles: VehicleDetailsVo[];
  dtOptions: any = {};
  vehicleDtOptions: any = {};

  async ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      lengthMenu: [8, 16, 24, 32],
      processing: true,
    };
    this.vehicleDtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      lengthMenu: [8, 16, 24, 32],
      processing: true,
    };

    await this.getVehicles();
  }
  getVehicles() {
    this.vehicleDetailsService.getVehicles().subscribe((response) => {
      console.log(response);
      if (response['resultObject'].length > 0) {
        this.vehicles = response['resultObject'];
        console.log('this.vehicles', this.vehicles);
      }
    });
  }
}
