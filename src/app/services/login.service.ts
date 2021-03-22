import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserVo } from '../models/user-vo';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: String = "http://localhost:50005/";
  private login: string = this.baseUrl + 'login';
  constructor(private httpClient: HttpClient) { }

  public loginValidate(user: UserVo) {
    return this.httpClient.post(this.login, user);
  }
}
