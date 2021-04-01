import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServicesService } from 'src/app/services/employee-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserVo } from 'src/app/models/user-vo';
import { InternalUserDetailsVo } from 'src/app/models/internal-user-details-vo';
import { InternalUserRoleMasterVo } from 'src/app/models/internal-user-role-master-vo';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  public loggedInUser = +localStorage.getItem('loggedInUser');
  public userForm: FormGroup;
  private user: UserVo = new UserVo();
  public internalUserDetails: InternalUserDetailsVo = new InternalUserDetailsVo();
  public rolesList: InternalUserRoleMasterVo;
  public role: InternalUserRoleMasterVo = new InternalUserRoleMasterVo();
  public submitted: boolean;
  public successMessage: string;
  public errorMessage: string;
  public saveSuccess: string;
  public error: string;

  constructor(private router: Router,
      private formBuilder: FormBuilder,
      private employeeServices: EmployeeServicesService) { }

  ngOnInit(): void {
    if(this.internalUserDetails.user == undefined) {
      this.internalUserDetails.user = this.user;
    }
    this.userForm = this.formBuilder.group({
      
      id: [this.internalUserDetails.id],
      firstName: ['', Validators.required, Validators.minLength[5], 
                      Validators.pattern('[A-Za-z]*')],
      lastName: [this.internalUserDetails.user.lastName,''],
      mobileNumber: ['', Validators.minLength[10], Validators.maxLength[10]],
      emailId: ['', Validators.email],
      gender: ['', Validators.required],
      addressState: ['', ''],
      addressCity: ['', ''],
      addressStreet: ['', ''],
      addressZipcode: ['', ''],
      roles: ['', '']
    })

    this.getRoles();
  }

  onSubmit() {

    this.submitted = true;
    if(this.userForm.invalid) {
      return;
    }
    this.internalUserDetails = this.userForm.value;
    this.user.firstName = this.userForm.value.firstName;
    this.user.lastName = this.userForm.value.lastName;
    this.user.mobileNumber = this.userForm.value.mobileNumber;
    this.user.emailId = this.userForm.value.emailId;
    this.user.gender = this.userForm.value.gender;
    this.user.createdBy = this.loggedInUser;
    this.internalUserDetails.user = this.user;
    this.internalUserDetails.internalUserRole = this.userForm.value.roles;
    console.log("internal user "+this.internalUserDetails);
    if(this.internalUserDetails.id == null || this.internalUserDetails.id == 0) {
      this.saveUser(this.internalUserDetails);
    }
  }

  get f() { return this.userForm.controls; }

  getRoles() {
   this.employeeServices.getInternalUserRoles().subscribe( response => {
     if(response['resultObject'] != null) {
       this.rolesList = response['resultObject'];
     }
   });
  }

  saveUser(internalUserDetails : InternalUserDetailsVo) {
    this.employeeServices.saveUser(internalUserDetails);
  }
   

}
