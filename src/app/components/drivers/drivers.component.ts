import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DriverService } from 'src/app/services/driver-service';
import { DriverDetailsVo } from 'src/app/models/driver-details-vo';

import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from "angular-datatables";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  constructor(
    private driverService: DriverService
  ) { }

  drivers: DriverDetailsVo[];
  dtOptions: any = {};
  customerDtOptions: any = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      lengthMenu: [8, 16, 24, 32],
      processing: true
    };
    this.customerDtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      lengthMenu: [8, 16, 24, 32],
      processing: true
    };
    this.getDrivers();
  }

  getDrivers() {
    this.driverService.getDrivers().subscribe(response => {
      if(response['resultObject'].length > 0) {
        this.drivers = response['resultObject'];
      }
    })
  }

}
