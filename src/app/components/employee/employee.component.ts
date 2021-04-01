import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServicesService } from 'src/app/services/employee-services.service';
import { UserVo } from 'src/app/models/user-vo';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  users: UserVo[];
  nodata: string = null;
  constructor(private router: Router,
              private employeeSerivices: EmployeeServicesService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.employeeSerivices.getAllUsers().subscribe(response => {
      if(response['resultObject'] != null) {
        this.users = response['resultObject'];
      } else {
        this.nodata = "No data found";
      }
    }, err => {
      this.nodata = "No data found";
    })
  }

}
