import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DriverDetailsVo } from '../../models/driver-details-vo';
import { DriverService } from '../../services/driver-service'
import { Router } from '@angular/router';
import { UserVo } from 'src/app/models/user-vo';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.scss']
})
export class CreateDriverComponent implements OnInit {

  driverForm: FormGroup;
  private driverDetailsVo: DriverDetailsVo = new DriverDetailsVo();
  private user: UserVo = new UserVo();
  public loggedInUser = localStorage.getItem('loggedInUser');
  public submitted: boolean = false;
  private createdBy: UserVo = new UserVo();
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  mobileNumber: string = '9945961063';

  constructor(private formBuilder: FormBuilder,
              private driverService: DriverService,
              private router: Router) { }

  ngOnInit(): void {
    this.driverDetailsVo.user = this.user;
    this.driverForm = this.formBuilder.group ({
      firstName: [this.driverDetailsVo.user.firstName, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      lastName: [this.driverDetailsVo.user.lastName],
      mobileNumber: [this.driverDetailsVo.user.mobileNumber, [Validators.required, Validators.maxLength(10)]],
      emailId: [this.driverDetailsVo.user.emailId, [Validators.email]],
      gender: [this.driverDetailsVo.user.gender]
    })
  }

  get f() { return this.driverForm.controls; }
  
  onSubmit(): void {
    this.submitted = true;

    if(this.driverForm.invalid) {
      return;
    }
   // this.driverForm.setValue(this.driverDetailsVo.createdBy.)
   this.driverDetailsVo.createdBy = this.createdBy;
   this.driverDetailsVo.createdBy.id = +this.loggedInUser;

   this.user.gender = this.driverForm.controls['gender'].value;
   this.user.firstName = this.driverForm.controls['firstName'].value;
   this.user.lastName = this.driverForm.controls['lastName'].value;
   this.user.mobileNumber = this.driverForm.controls['mobileNumber'].value;
   this.user.emailId = this.driverForm.controls['emailId'].value;
   
   this.driverDetailsVo.user = this.user;
   console.log('Driver details from driver vo ', this.driverDetailsVo);
    console.log('Driver details ::: ', this.driverForm.value);
    this.driverService.saveDriver(this.driverDetailsVo).subscribe( response => {
      if(response["resultObject"] === "success") {
        this.router.navigateByUrl("/drivers");
      } else {

      }
    }, error => {

    })
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;
    
    this.currentFile = this.selectedFiles.item(0);
    this.driverService.upload(this.currentFile, this.mobileNumber).subscribe(response => {
      if(response['resultObject'] != null) {
        alert('updated successfully');
      } else {
        alert('Not updated successfully');
      }
      // event => {
      //   if (event.type === HttpEventType.UploadProgress) {
      //     this.progress = Math.round(100 * event.loaded / event.total);
      //   } 
      // },
      // err => {
      //   this.progress = 0;
      //   this.message = 'Could not upload the file!';
      //   this.currentFile = undefined;
      // });
  
      this.selectedFiles = undefined;
    });
  }
}
