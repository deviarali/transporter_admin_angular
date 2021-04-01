import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InternalUserDetailsVo } from '../models/internal-user-details-vo';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl: String = "http://139.59.42.229:8090/transporter/";
  //baseUrl = "http://localhost:50005/";
  getUsers = this.baseUrl + 'user/users';
  internalUserRoles = this.baseUrl + 'internalUser/roles';
  saveInternalUser = this.baseUrl + 'user/createInternalUser';
  
  getAllUsers() {
    return this.httpClient.get(this.getUsers);
  }

  getInternalUserRoles() {
    return this.httpClient.get(this.internalUserRoles);
  }

  saveUser(internalUserDetails : InternalUserDetailsVo) {
    return this.httpClient.post(this.saveInternalUser, internalUserDetails);
  }
}
