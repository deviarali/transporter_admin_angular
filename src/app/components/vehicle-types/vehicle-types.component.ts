import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleTypeVo } from 'src/app/models/vehicle-type-vo';
import { VehicleTypesService } from 'src/app/services/vehicle-types.service';

@Component({
  selector: 'app-vehicle-types',
  templateUrl: './vehicle-types.component.html',
  styleUrls: ['./vehicle-types.component.scss']
})
export class VehicleTypesComponent implements OnInit {

  constructor(private router: Router,
              private vehicleTypesService: VehicleTypesService) { }
  
  vehicleTypes: VehicleTypeVo[];
  errorMessage: string = null; 

  ngOnInit(): void {
    this.getVehicleTypes();
  }

  getVehicleTypes() {
     this.vehicleTypesService.getVehicleTypes().subscribe(response => {
       if(response['resultObject'] != null) {
         this.vehicleTypes = response['resultObject'];
       } else {
         this.errorMessage = 'No data found';
       }
     })
  }
}
