import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DriverDetailsVo } from '../../models/driver-details-vo';
import { DriverService } from '../../services/driver-service';


@Component({
  selector: 'app-driver-view',
  templateUrl: './driver-view.component.html',
  styleUrls: ['./driver-view.component.scss']
})

export class DriverViewComponent implements OnInit {

  driver = null;
  documents = [];
  rides = [];
  ridesCancelled = [];
  complaints = [];

  driverId = null;

  documentsDTOptions: any = {};
  ridesDTOptions: any = {};
  ridesCancelledDTOptions: any = {};
  complaintsDTOptions: any = {};

  constructor(private route: ActivatedRoute,
    private driverService: DriverService) { }

  ngOnInit(): void {

    this.documentsDTOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      lengthMenu: [8, 16, 24, 32],
      processing: true
    };

    this.ridesDTOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      lengthMenu: [8, 16, 24, 32],
      processing: true
    };

    this.ridesCancelledDTOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      lengthMenu: [8, 16, 24, 32],
      processing: true
    };

    this.complaintsDTOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      lengthMenu: [8, 16, 24, 32],
      processing: true
    };

    this.route.queryParamMap
      .subscribe((params) => {
        console.log(params);
        this.driverId = params['params'].id;
      }
      );

    this.driver = history.state[0];
    if (this.driver === undefined || this.driver === null) {
      this.driver = new DriverDetailsVo();
    }

    if (this.driverId != undefined && this.driverId != null) {
      this.documents = this.findDriverDocuments(this.driverId);
      this.rides = this.findDriverRides(this.driverId);
      this.ridesCancelled = this.findDriverRidesCancelled(this.driverId);
      this.complaints = this.findDriverComplaints(this.driverId);
    }

    console.log(this.documents);
  }


  findDriverDocuments(driverId) {
    return this.driverService.findDriverDocuments(driverId);
  }

  findDriverRides(driverId) {
    return this.driverService.findDriverRides(driverId);
  }

  findDriverRidesCancelled(driverId) {
    return this.driverService.findDriverRidesCancelled(driverId);
  }

  findDriverComplaints(driverId) {
    return this.driverService.findDriverComplaints(driverId);
  }

}
